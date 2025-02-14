"use strict";
// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.rest = exports.stream = exports.request = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("./utils");
let AbortController;
if (!globalThis.AbortController) {
    AbortController = require("abort-controller");
}
else {
    // https://nodejs.org/api/globals.html#class-abortcontroller
    // AbortController available in v14.17.0 as experimental
    AbortController = globalThis.AbortController;
}
async function fetchWithRetries(url, init, max_retries = 0) {
    const res = await (0, node_fetch_1.default)(url, init);
    if (res.status === 429 && max_retries > 0) {
        const rateLimitReset = Number(res.headers.get("x-rate-limit-reset"));
        const rateLimitRemaining = Number(res.headers.get("x-rate-limit-remaining"));
        const timeTillReset = rateLimitReset * 1000 - Date.now();
        let timeToWait = 1000;
        if (rateLimitRemaining === 0)
            timeToWait = timeTillReset;
        await new Promise((resolve) => setTimeout(resolve, timeToWait));
        return fetchWithRetries(url, init, max_retries - 1);
    }
    return res;
}
class TwitterResponseError extends Error {
    constructor(status, statusText, headers, error) {
        super();
        this.status = status;
        this.statusText = statusText;
        this.headers = Object.fromEntries(headers);
        this.error = error;
    }
}
async function request({ auth, endpoint, params: query = {}, request_body, method, max_retries, base_url = "https://api.twitter.com", headers, ...options }) {
    const url = new URL(base_url + endpoint);
    url.search = (0, utils_1.buildQueryString)(query);
    const isPost = method === "POST" && !!request_body;
    const authHeader = auth
        ? await auth.getAuthHeader(url.href, method)
        : undefined;
    const response = await fetchWithRetries(url.toString(), {
        headers: {
            ...(isPost
                ? { "Content-Type": "application/json; charset=utf-8" }
                : undefined),
            ...authHeader,
            ...headers,
        },
        method,
        body: isPost ? JSON.stringify(request_body) : undefined,
        // Timeout if you don't see any data for 60 seconds
        // https://developer.twitter.com/en/docs/tutorials/consuming-streaming-data
        timeout: 60000,
        ...options,
    }, max_retries);
    if (!response.ok) {
        const error = await response.json();
        throw new TwitterResponseError(response.status, response.statusText, response.headers, error);
    }
    return response;
}
exports.request = request;
async function* stream(args) {
    const controller = new AbortController();
    const { body } = await request({
        signal: controller.signal,
        ...args,
    });
    if (body === null)
        throw new Error("No response returned from stream");
    let buf = "";
    try {
        for await (const chunk of body) {
            buf += chunk.toString();
            const lines = buf.split("\r\n");
            for (const [i, line] of lines.entries()) {
                if (i === lines.length - 1) {
                    buf = line;
                }
                else if (line)
                    yield JSON.parse(line);
            }
        }
    }
    finally {
        controller.abort();
    }
}
exports.stream = stream;
async function rest(args) {
    const response = await request(args);
    return response.json();
}
exports.rest = rest;
function paginate(args) {
    return {
        then(resolve, reject) {
            return rest(args).then(resolve, reject);
        },
        async *[Symbol.asyncIterator]() {
            let ended = false;
            let pagination_token;
            while (!ended) {
                const response = await rest({
                    ...args,
                    params: {
                        ...args.params,
                        ...(pagination_token && { pagination_token }),
                    },
                });
                yield response;
                pagination_token = response?.meta?.next_token;
                if (!pagination_token) {
                    ended = true;
                }
            }
        },
    };
}
exports.paginate = paginate;
