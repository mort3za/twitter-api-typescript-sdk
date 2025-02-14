"use strict";
// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _OAuth2User_options, _OAuth2User_code_verifier, _OAuth2User_code_challenge;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2User = void 0;
const crypto_1 = __importDefault(require("crypto"));
const utils_1 = require("./utils");
const request_1 = require("./request");
function sha256(buffer) {
    return crypto_1.default.createHash("sha256").update(buffer).digest();
}
function base64URLEncode(str) {
    return str
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}
function processTokenResponse(token) {
    const { expires_in, ...rest } = token;
    return {
        ...rest,
        ...(!!expires_in && {
            expires_at: new Date(Date.now() + expires_in * 1000),
        }),
    };
}
/**
 * Twitter OAuth2 Authentication Client
 */
class OAuth2User {
    constructor(options, code_verifier) {
        _OAuth2User_options.set(this, void 0);
        _OAuth2User_code_verifier.set(this, void 0);
        _OAuth2User_code_challenge.set(this, void 0);
        __classPrivateFieldSet(this, _OAuth2User_options, options, "f");
        __classPrivateFieldSet(this, _OAuth2User_code_verifier, code_verifier, "f");
    }
    /**
     * Refresh the access token
     */
    async refreshAccessToken() {
        const refresh_token = this.token?.refresh_token;
        const { client_id, client_secret, request_options } = __classPrivateFieldGet(this, _OAuth2User_options, "f");
        if (!client_id) {
            throw new Error("client_id is required");
        }
        if (!refresh_token) {
            throw new Error("refresh_token is required");
        }
        const data = await (0, request_1.rest)({
            ...request_options,
            endpoint: `/2/oauth2/token`,
            params: {
                client_id,
                grant_type: "refresh_token",
                refresh_token,
            },
            method: "POST",
            headers: {
                ...request_options?.headers,
                "Content-type": "application/x-www-form-urlencoded",
                ...(!!client_secret && {
                    Authorization: (0, utils_1.basicAuthHeader)(client_id, client_secret),
                }),
            },
        });
        const token = processTokenResponse(data);
        this.token = token;
        return { token };
    }
    /**
     * Check if an access token is expired
     */
    isAccessTokenExpired() {
        const refresh_token = this.token?.refresh_token;
        const expires_at = this.token?.expires_at;
        return (!!refresh_token &&
            (!expires_at || expires_at <= new Date(Date.now() + 1000)));
    }
    /**
     * Request an access token
     */
    async requestAccessToken(code) {
        const { client_id, client_secret, callback, request_options } = __classPrivateFieldGet(this, _OAuth2User_options, "f");
        const code_verifier = __classPrivateFieldGet(this, _OAuth2User_code_verifier, "f");
        if (!client_id) {
            throw new Error("client_id is required");
        }
        if (!callback) {
            throw new Error("callback is required");
        }
        const params = {
            code,
            grant_type: "authorization_code",
            code_verifier,
            client_id,
            redirect_uri: callback,
        };
        const data = await (0, request_1.rest)({
            ...request_options,
            endpoint: `/2/oauth2/token`,
            params,
            method: "POST",
            headers: {
                ...request_options?.headers,
                "Content-type": "application/x-www-form-urlencoded",
                ...(!!client_secret && {
                    Authorization: (0, utils_1.basicAuthHeader)(client_id, client_secret),
                }),
            },
        });
        const token = processTokenResponse(data);
        this.token = token;
        return { token };
    }
    /**
     * Revoke an access token
     */
    async revokeAccessToken() {
        const { client_id, client_secret, request_options } = __classPrivateFieldGet(this, _OAuth2User_options, "f");
        const access_token = this.token?.access_token;
        const refresh_token = this.token?.refresh_token;
        if (!client_id) {
            throw new Error("client_id is required");
        }
        let params;
        if (!!access_token) {
            params = {
                token_type_hint: "access_token",
                token: access_token,
                client_id,
            };
        }
        else if (!!refresh_token) {
            params = {
                token_type_hint: "refresh_token",
                token: refresh_token,
                client_id,
            };
        }
        else {
            throw new Error("access_token or refresh_token required");
        }
        return (0, request_1.rest)({
            ...request_options,
            endpoint: `/2/oauth2/revoke`,
            params,
            method: "POST",
            headers: {
                ...request_options?.headers,
                "Content-Type": "application/x-www-form-urlencoded",
                ...(!!client_secret && {
                    Authorization: (0, utils_1.basicAuthHeader)(client_id, client_secret),
                }),
            },
        });
    }
    generateAuthURL(options) {
        const { client_id, callback, scopes } = __classPrivateFieldGet(this, _OAuth2User_options, "f");
        if (!callback)
            throw new Error("callback required");
        if (!scopes)
            throw new Error("scopes required");
        if (options.code_challenge_method === "s256") {
            const code_verifier = base64URLEncode(crypto_1.default.randomBytes(32));
            __classPrivateFieldSet(this, _OAuth2User_code_verifier, code_verifier, "f");
            __classPrivateFieldSet(this, _OAuth2User_code_challenge, base64URLEncode(sha256(code_verifier)), "f");
        }
        else {
            __classPrivateFieldSet(this, _OAuth2User_code_challenge, options.code_challenge, "f");
            __classPrivateFieldSet(this, _OAuth2User_code_verifier, options.code_challenge, "f");
        }
        const code_challenge = __classPrivateFieldGet(this, _OAuth2User_code_challenge, "f");
        const url = new URL("https://twitter.com/i/oauth2/authorize");
        url.search = (0, utils_1.buildQueryString)({
            ...options,
            client_id,
            scope: scopes.join(" "),
            response_type: "code",
            redirect_uri: callback,
            code_challenge_method: options.code_challenge_method || "plain",
            code_challenge,
        });
        return url.toString();
    }
    async getAuthHeader() {
        if (!this.token?.access_token)
            throw new Error("access_token is required");
        if (this.isAccessTokenExpired())
            await this.refreshAccessToken();
        return {
            Authorization: `Bearer ${this.token.access_token}`,
        };
    }
}
exports.OAuth2User = OAuth2User;
_OAuth2User_options = new WeakMap(), _OAuth2User_code_verifier = new WeakMap(), _OAuth2User_code_challenge = new WeakMap();
