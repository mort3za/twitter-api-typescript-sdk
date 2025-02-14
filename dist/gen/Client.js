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
var _Client_auth, _Client_defaultRequestOptions;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*
This file is auto-generated
Do not make direct changes to this file
*/
const request_1 = require("../request");
const auth_1 = require("../auth");
/**
 * Twitter API TypeScript Client
 *
 * TypeScript SDK for use with the Twitter API
 *
 */
class Client {
    constructor(auth, requestOptions) {
        _Client_auth.set(this, void 0);
        _Client_defaultRequestOptions.set(this, void 0);
        /**
         * Bookmarks
         *
         * Endpoints related to retrieving, managing bookmarks of a user
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/bookmarks
         */
        this.bookmarks = {
            /**
            * Bookmarks by User
            *
        
            * Returns Tweet objects that have been bookmarked by the requesting User
            * @param id - The ID of the authenticated source User for whom to return results.
            * @param params - The params for getUsersIdBookmarks
            * @param request_options - Customize the options for this request
            */
            getUsersIdBookmarks: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/bookmarks`,
                params,
                method: "GET",
            }),
            /**
            * Add Tweet to Bookmarks
            *
        
            * Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks
            * @param id - The ID of the authenticated source User for whom to add bookmarks.
            * @param request_body - The request_body for postUsersIdBookmarks
            * @param request_options - Customize the options for this request
            */
            postUsersIdBookmarks: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/bookmarks`,
                request_body,
                method: "POST",
            }),
            /**
            * Remove a bookmarked Tweet
            *
        
            * Removes a Tweet from the requesting User's bookmarked Tweets.
            * @param id - The ID of the authenticated source User whose bookmark is to be removed.
            * @param tweet_id - The ID of the Tweet that the source User is removing from bookmarks.
            * @param request_options - Customize the options for this request
            */
            usersIdBookmarksDelete: (id, tweet_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/bookmarks/${tweet_id}`,
                method: "DELETE",
            }),
        };
        /**
         * Compliance
         *
         * Endpoints related to keeping Twitter data in your systems compliant
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/compliance/batch-tweet/introduction
         */
        this.compliance = {
            /**
            * List Compliance Jobs
            *
        
            * Returns recent Compliance Jobs for a given job type and optional job status
            * @param params - The params for listBatchComplianceJobs
            * @param request_options - Customize the options for this request
            */
            listBatchComplianceJobs: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/compliance/jobs`,
                params,
                method: "GET",
            }),
            /**
            * Create compliance job
            *
        
            * Creates a compliance for the given job type
            * @param request_body - The request_body for createBatchComplianceJob
            * @param request_options - Customize the options for this request
            */
            createBatchComplianceJob: (request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/compliance/jobs`,
                request_body,
                method: "POST",
            }),
            /**
            * Get Compliance Job
            *
        
            * Returns a single Compliance Job by ID
            * @param id - The ID of the Compliance Job to retrieve.
            * @param params - The params for getBatchComplianceJob
            * @param request_options - Customize the options for this request
            */
            getBatchComplianceJob: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/compliance/jobs/${id}`,
                params,
                method: "GET",
            }),
            /**
            * Tweets Compliance stream
            *
        
            * Streams 100% of compliance data for Tweets
            * @param params - The params for getTweetsComplianceStream
            * @param request_options - Customize the options for this request
            */
            getTweetsComplianceStream: (params, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/compliance/stream`,
                params,
                method: "GET",
            }),
            /**
            * Users Compliance stream
            *
        
            * Streams 100% of compliance data for Users
            * @param params - The params for getUsersComplianceStream
            * @param request_options - Customize the options for this request
            */
            getUsersComplianceStream: (params, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/compliance/stream`,
                params,
                method: "GET",
            }),
        };
        /**
         * General
         *
         * Miscellaneous endpoints for general API functionality
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api
         */
        this.general = {
            /**
            * Returns the OpenAPI Specification document.
            *
        
            * Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
            * @param request_options - Customize the options for this request
            */
            getOpenApiSpec: (request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/openapi.json`,
                method: "GET",
            }),
        };
        /**
         * Lists
         *
         * Endpoints related to retrieving, managing Lists
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/lists
         */
        this.lists = {
            /**
            * Create List
            *
        
            * Creates a new List.
            * @param request_body - The request_body for listIdCreate
            * @param request_options - Customize the options for this request
            */
            listIdCreate: (request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists`,
                request_body,
                method: "POST",
            }),
            /**
            * Delete List
            *
        
            * Delete a List that you own.
            * @param id - The ID of the List to delete.
            * @param request_options - Customize the options for this request
            */
            listIdDelete: (id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}`,
                method: "DELETE",
            }),
            /**
            * List lookup by List ID.
            *
        
            * Returns a List.
            * @param id - The ID of the List.
            * @param params - The params for listIdGet
            * @param request_options - Customize the options for this request
            */
            listIdGet: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}`,
                params,
                method: "GET",
            }),
            /**
            * Update List.
            *
        
            * Update a List that you own.
            * @param id - The ID of the List to modify.
            * @param request_body - The request_body for listIdUpdate
            * @param request_options - Customize the options for this request
            */
            listIdUpdate: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}`,
                request_body,
                method: "PUT",
            }),
            /**
            * Add a List member
            *
        
            * Causes a User to become a member of a List.
            * @param id - The ID of the List for which to add a member.
            * @param request_body - The request_body for listAddMember
            * @param request_options - Customize the options for this request
            */
            listAddMember: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}/members`,
                request_body,
                method: "POST",
            }),
            /**
            * Remove a List member
            *
        
            * Causes a User to be removed from the members of a List.
            * @param id - The ID of the List to remove a member.
            * @param user_id - The ID of User that will be removed from the List.
            * @param request_options - Customize the options for this request
            */
            listRemoveMember: (id, user_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}/members/${user_id}`,
                method: "DELETE",
            }),
            /**
            * Get User's Followed Lists
            *
        
            * Returns a User's followed Lists.
            * @param id - The ID of the User to lookup.
            * @param params - The params for userFollowedLists
            * @param request_options - Customize the options for this request
            */
            userFollowedLists: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/followed_lists`,
                params,
                method: "GET",
            }),
            /**
            * Follow a List
            *
        
            * Causes a User to follow a List.
            * @param id - The ID of the authenticated source User that will follow the List.
            * @param request_body - The request_body for listUserFollow
            * @param request_options - Customize the options for this request
            */
            listUserFollow: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/followed_lists`,
                request_body,
                method: "POST",
            }),
            /**
            * Unfollow a List
            *
        
            * Causes a User to unfollow a List.
            * @param id - The ID of the authenticated source User that will unfollow the List.
            * @param list_id - The ID of the List to unfollow.
            * @param request_options - Customize the options for this request
            */
            listUserUnfollow: (id, list_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/followed_lists/${list_id}`,
                method: "DELETE",
            }),
            /**
            * Get a User's List Memberships
            *
        
            * Get a User's List Memberships.
            * @param id - The ID of the User to lookup.
            * @param params - The params for getUserListMemberships
            * @param request_options - Customize the options for this request
            */
            getUserListMemberships: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/list_memberships`,
                params,
                method: "GET",
            }),
            /**
            * Get a User's Owned Lists.
            *
        
            * Get a User's Owned Lists.
            * @param id - The ID of the User to lookup.
            * @param params - The params for listUserOwnedLists
            * @param request_options - Customize the options for this request
            */
            listUserOwnedLists: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/owned_lists`,
                params,
                method: "GET",
            }),
            /**
            * Get a User's Pinned Lists
            *
        
            * Get a User's Pinned Lists.
            * @param id - The ID of the authenticated source User for whom to return results.
            * @param params - The params for listUserPinnedLists
            * @param request_options - Customize the options for this request
            */
            listUserPinnedLists: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/pinned_lists`,
                params,
                method: "GET",
            }),
            /**
            * Pin a List
            *
        
            * Causes a User to pin a List.
            * @param id - The ID of the authenticated source User that will pin the List.
            * @param request_body - The request_body for listUserPin
            * @param request_options - Customize the options for this request
            */
            listUserPin: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/pinned_lists`,
                request_body,
                method: "POST",
            }),
            /**
            * Unpin a List
            *
        
            * Causes a User to remove a pinned List.
            * @param id - The ID of the authenticated source User for whom to return results.
            * @param list_id - The ID of the List to unpin.
            * @param request_options - Customize the options for this request
            */
            listUserUnpin: (id, list_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/pinned_lists/${list_id}`,
                method: "DELETE",
            }),
        };
        /**
         * Spaces
         *
         * Endpoints related to retrieving, managing Spaces
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/spaces
         */
        this.spaces = {
            /**
            * Space lookup up Space IDs
            *
        
            * Returns a variety of information about the Spaces specified by the requested IDs
            * @param params - The params for findSpacesByIds
            * @param request_options - Customize the options for this request
            */
            findSpacesByIds: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces`,
                params,
                method: "GET",
            }),
            /**
            * Space lookup by their creators
            *
        
            * Returns a variety of information about the Spaces created by the provided User IDs
            * @param params - The params for findSpacesByCreatorIds
            * @param request_options - Customize the options for this request
            */
            findSpacesByCreatorIds: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces/by/creator_ids`,
                params,
                method: "GET",
            }),
            /**
            * Search for Spaces
            *
        
            * Returns Spaces that match the provided query.
            * @param params - The params for searchSpaces
            * @param request_options - Customize the options for this request
            */
            searchSpaces: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces/search`,
                params,
                method: "GET",
            }),
            /**
            * Space lookup by Space ID
            *
        
            * Returns a variety of information about the Space specified by the requested ID
            * @param id - The ID of the Space to be retrieved.
            * @param params - The params for findSpaceById
            * @param request_options - Customize the options for this request
            */
            findSpaceById: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces/${id}`,
                params,
                method: "GET",
            }),
            /**
            * Retrieve the list of Users who purchased a ticket to the given space
            *
        
            * Retrieves the list of Users who purchased a ticket to the given space
            * @param id - The ID of the Space to be retrieved.
            * @param params - The params for spaceBuyers
            * @param request_options - Customize the options for this request
            */
            spaceBuyers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces/${id}/buyers`,
                params,
                method: "GET",
            }),
            /**
            * Retrieve Tweets from a Space.
            *
        
            * Retrieves Tweets shared in the specified Space.
            * @param id - The ID of the Space to be retrieved.
            * @param params - The params for spaceTweets
            * @param request_options - Customize the options for this request
            */
            spaceTweets: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/spaces/${id}/tweets`,
                params,
                method: "GET",
            }),
        };
        /**
         * Tweets
         *
         * Endpoints related to retrieving, searching, and modifying Tweets
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup
         */
        this.tweets = {
            /**
            * List Tweets timeline by List ID.
            *
        
            * Returns a list of Tweets associated with the provided List ID.
            * @param id - The ID of the List.
            * @param params - The params for listsIdTweets
            * @param request_options - Customize the options for this request
            */
            listsIdTweets: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}/tweets`,
                params,
                method: "GET",
            }),
            /**
            * Tweet lookup by Tweet IDs
            *
        
            * Returns a variety of information about the Tweet specified by the requested ID.
            * @param params - The params for findTweetsById
            * @param request_options - Customize the options for this request
            */
            findTweetsById: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets`,
                params,
                method: "GET",
            }),
            /**
            * Creation of a Tweet
            *
        
            * Causes the User to create a Tweet under the authorized account.
            * @param request_body - The request_body for createTweet
            * @param request_options - Customize the options for this request
            */
            createTweet: (request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets`,
                request_body,
                method: "POST",
            }),
            /**
            * Full archive search counts
            *
        
            * Returns Tweet Counts that match a search query.
            * @param params - The params for tweetCountsFullArchiveSearch
            * @param request_options - Customize the options for this request
            */
            tweetCountsFullArchiveSearch: (params, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/counts/all`,
                params,
                method: "GET",
            }),
            /**
            * Recent search counts
            *
        
            * Returns Tweet Counts from the last 7 days that match a search query.
            * @param params - The params for tweetCountsRecentSearch
            * @param request_options - Customize the options for this request
            */
            tweetCountsRecentSearch: (params, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/counts/recent`,
                params,
                method: "GET",
            }),
            /**
            * Firehose stream
            *
        
            * Streams 100% of public Tweets.
            * @param params - The params for getTweetsFirehoseStream
            * @param request_options - Customize the options for this request
            */
            getTweetsFirehoseStream: (params, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/firehose/stream`,
                params,
                method: "GET",
            }),
            /**
            * Sample stream
            *
        
            * Streams a deterministic 1% of public Tweets.
            * @param params - The params for sampleStream
            * @param request_options - Customize the options for this request
            */
            sampleStream: (params = {}, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/sample/stream`,
                params,
                method: "GET",
            }),
            /**
            * Sample 10% stream
            *
        
            * Streams a deterministic 10% of public Tweets.
            * @param params - The params for getTweetsSample10Stream
            * @param request_options - Customize the options for this request
            */
            getTweetsSample10Stream: (params, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/sample10/stream`,
                params,
                method: "GET",
            }),
            /**
            * Full-archive search
            *
        
            * Returns Tweets that match a search query.
            * @param params - The params for tweetsFullarchiveSearch
            * @param request_options - Customize the options for this request
            */
            tweetsFullarchiveSearch: (params, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/search/all`,
                params,
                method: "GET",
            }),
            /**
            * Recent search
            *
        
            * Returns Tweets from the last 7 days that match a search query.
            * @param params - The params for tweetsRecentSearch
            * @param request_options - Customize the options for this request
            */
            tweetsRecentSearch: (params, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/search/recent`,
                params,
                method: "GET",
            }),
            /**
            * Filtered stream
            *
        
            * Streams Tweets matching the stream's active rule set.
            * @param params - The params for searchStream
            * @param request_options - Customize the options for this request
            */
            searchStream: (params = {}, request_options) => (0, request_1.stream)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/search/stream`,
                params,
                method: "GET",
            }),
            /**
            * Rules lookup
            *
        
            * Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
            * @param params - The params for getRules
            * @param request_options - Customize the options for this request
            */
            getRules: (params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/search/stream/rules`,
                params,
                method: "GET",
            }),
            /**
            * Add/Delete rules
            *
        
            * Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
            * @param params - The params for addOrDeleteRules
            * @param request_body - The request_body for addOrDeleteRules
            * @param request_options - Customize the options for this request
            */
            addOrDeleteRules: (request_body, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/search/stream/rules`,
                params,
                request_body,
                method: "POST",
            }),
            /**
            * Tweet delete by Tweet ID
            *
        
            * Delete specified Tweet (in the path) by ID.
            * @param id - The ID of the Tweet to be deleted.
            * @param request_options - Customize the options for this request
            */
            deleteTweetById: (id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${id}`,
                method: "DELETE",
            }),
            /**
            * Tweet lookup by Tweet ID
            *
        
            * Returns a variety of information about the Tweet specified by the requested ID.
            * @param id - A single Tweet ID.
            * @param params - The params for findTweetById
            * @param request_options - Customize the options for this request
            */
            findTweetById: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${id}`,
                params,
                method: "GET",
            }),
            /**
            * Retrieve Tweets that quote a Tweet.
            *
        
            * Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.
            * @param id - A single Tweet ID.
            * @param params - The params for findTweetsThatQuoteATweet
            * @param request_options - Customize the options for this request
            */
            findTweetsThatQuoteATweet: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${id}/quote_tweets`,
                params,
                method: "GET",
            }),
            /**
            * Hide replies
            *
        
            * Hides or unhides a reply to an owned conversation.
            * @param tweet_id - The ID of the reply that you want to hide or unhide.
            * @param request_body - The request_body for hideReplyById
            * @param request_options - Customize the options for this request
            */
            hideReplyById: (tweet_id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${tweet_id}/hidden`,
                request_body,
                method: "PUT",
            }),
            /**
            * Returns Tweet objects liked by the provided User ID
            *
        
            * Returns a list of Tweets liked by the provided User ID
            * @param id - The ID of the User to lookup.
            * @param params - The params for usersIdLikedTweets
            * @param request_options - Customize the options for this request
            */
            usersIdLikedTweets: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/liked_tweets`,
                params,
                method: "GET",
            }),
            /**
            * Causes the User (in the path) to like the specified Tweet
            *
        
            * Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.
            * @param id - The ID of the authenticated source User that is requesting to like the Tweet.
            * @param request_body - The request_body for usersIdLike
            * @param request_options - Customize the options for this request
            */
            usersIdLike: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/likes`,
                request_body,
                method: "POST",
            }),
            /**
            * Causes the User (in the path) to unlike the specified Tweet
            *
        
            * Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request
            * @param id - The ID of the authenticated source User that is requesting to unlike the Tweet.
            * @param tweet_id - The ID of the Tweet that the User is requesting to unlike.
            * @param request_options - Customize the options for this request
            */
            usersIdUnlike: (id, tweet_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/likes/${tweet_id}`,
                method: "DELETE",
            }),
            /**
            * User mention timeline by User ID
            *
        
            * Returns Tweet objects that mention username associated to the provided User ID
            * @param id - The ID of the User to lookup.
            * @param params - The params for usersIdMentions
            * @param request_options - Customize the options for this request
            */
            usersIdMentions: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/mentions`,
                params,
                method: "GET",
            }),
            /**
            * Causes the User (in the path) to retweet the specified Tweet.
            *
        
            * Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.
            * @param id - The ID of the authenticated source User that is requesting to retweet the Tweet.
            * @param request_body - The request_body for usersIdRetweets
            * @param request_options - Customize the options for this request
            */
            usersIdRetweets: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/retweets`,
                request_body,
                method: "POST",
            }),
            /**
            * Causes the User (in the path) to unretweet the specified Tweet
            *
        
            * Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request
            * @param id - The ID of the authenticated source User that is requesting to retweet the Tweet.
            * @param source_tweet_id - The ID of the Tweet that the User is requesting to unretweet.
            * @param request_options - Customize the options for this request
            */
            usersIdUnretweets: (id, source_tweet_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/retweets/${source_tweet_id}`,
                method: "DELETE",
            }),
            /**
            * User home timeline by User ID
            *
        
            * Returns Tweet objects that appears in the provided User ID's home timeline
            * @param id - The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
            * @param params - The params for usersIdTimeline
            * @param request_options - Customize the options for this request
            */
            usersIdTimeline: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/timelines/reverse_chronological`,
                params,
                method: "GET",
            }),
            /**
            * User Tweets timeline by User ID
            *
        
            * Returns a list of Tweets authored by the provided User ID
            * @param id - The ID of the User to lookup.
            * @param params - The params for usersIdTweets
            * @param request_options - Customize the options for this request
            */
            usersIdTweets: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/tweets`,
                params,
                method: "GET",
            }),
        };
        /**
         * Users
         *
         * Endpoints related to retrieving, managing relationships of Users
         *
         * Find out more
         * https://developer.twitter.com/en/docs/twitter-api/users/lookup
         */
        this.users = {
            /**
            * Returns User objects that follow a List by the provided List ID
            *
        
            * Returns a list of Users that follow a List by the provided List ID
            * @param id - The ID of the List.
            * @param params - The params for listGetFollowers
            * @param request_options - Customize the options for this request
            */
            listGetFollowers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}/followers`,
                params,
                method: "GET",
            }),
            /**
            * Returns User objects that are members of a List by the provided List ID.
            *
        
            * Returns a list of Users that are members of a List by the provided List ID.
            * @param id - The ID of the List.
            * @param params - The params for listGetMembers
            * @param request_options - Customize the options for this request
            */
            listGetMembers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/lists/${id}/members`,
                params,
                method: "GET",
            }),
            /**
            * Returns User objects that have liked the provided Tweet ID
            *
        
            * Returns a list of Users that have liked the provided Tweet ID
            * @param id - A single Tweet ID.
            * @param params - The params for tweetsIdLikingUsers
            * @param request_options - Customize the options for this request
            */
            tweetsIdLikingUsers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${id}/liking_users`,
                params,
                method: "GET",
            }),
            /**
            * Returns User objects that have retweeted the provided Tweet ID
            *
        
            * Returns a list of Users that have retweeted the provided Tweet ID
            * @param id - A single Tweet ID.
            * @param params - The params for tweetsIdRetweetingUsers
            * @param request_options - Customize the options for this request
            */
            tweetsIdRetweetingUsers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/tweets/${id}/retweeted_by`,
                params,
                method: "GET",
            }),
            /**
            * User lookup by IDs
            *
        
            * This endpoint returns information about Users. Specify Users by their ID.
            * @param params - The params for findUsersById
            * @param request_options - Customize the options for this request
            */
            findUsersById: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users`,
                params,
                method: "GET",
            }),
            /**
            * User lookup by usernames
            *
        
            * This endpoint returns information about Users. Specify Users by their username.
            * @param params - The params for findUsersByUsername
            * @param request_options - Customize the options for this request
            */
            findUsersByUsername: (params, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/by`,
                params,
                method: "GET",
            }),
            /**
            * User lookup by username
            *
        
            * This endpoint returns information about a User. Specify User by username.
            * @param username - A username.
            * @param params - The params for findUserByUsername
            * @param request_options - Customize the options for this request
            */
            findUserByUsername: (username, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/by/username/${username}`,
                params,
                method: "GET",
            }),
            /**
            * User lookup me
            *
        
            * This endpoint returns information about the requesting User.
            * @param params - The params for findMyUser
            * @param request_options - Customize the options for this request
            */
            findMyUser: (params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/me`,
                params,
                method: "GET",
            }),
            /**
            * User lookup by ID
            *
        
            * This endpoint returns information about a User. Specify User by ID.
            * @param id - The ID of the User to lookup.
            * @param params - The params for findUserById
            * @param request_options - Customize the options for this request
            */
            findUserById: (id, params = {}, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}`,
                params,
                method: "GET",
            }),
            /**
            * Returns User objects that are blocked by provided User ID
            *
        
            * Returns a list of Users that are blocked by the provided User ID
            * @param id - The ID of the authenticated source User for whom to return results.
            * @param params - The params for usersIdBlocking
            * @param request_options - Customize the options for this request
            */
            usersIdBlocking: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/blocking`,
                params,
                method: "GET",
            }),
            /**
            * Block User by User ID
            *
        
            * Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request
            * @param id - The ID of the authenticated source User that is requesting to block the target User.
            * @param request_body - The request_body for usersIdBlock
            * @param request_options - Customize the options for this request
            */
            usersIdBlock: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/blocking`,
                request_body,
                method: "POST",
            }),
            /**
            * Returns User objects that follow a List by the provided User ID
            *
        
            * Returns a list of Users that follow the provided User ID
            * @param id - The ID of the User to lookup.
            * @param params - The params for usersIdFollowers
            * @param request_options - Customize the options for this request
            */
            usersIdFollowers: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/followers`,
                params,
                method: "GET",
            }),
            /**
            * Following by User ID
            *
        
            * Returns a list of Users that are being followed by the provided User ID
            * @param id - The ID of the User to lookup.
            * @param params - The params for usersIdFollowing
            * @param request_options - Customize the options for this request
            */
            usersIdFollowing: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/following`,
                params,
                method: "GET",
            }),
            /**
            * Follow User
            *
        
            * Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request
            * @param id - The ID of the authenticated source User that is requesting to follow the target User.
            * @param request_body - The request_body for usersIdFollow
            * @param request_options - Customize the options for this request
            */
            usersIdFollow: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/following`,
                request_body,
                method: "POST",
            }),
            /**
            * Returns User objects that are muted by the provided User ID
            *
        
            * Returns a list of Users that are muted by the provided User ID
            * @param id - The ID of the authenticated source User for whom to return results.
            * @param params - The params for usersIdMuting
            * @param request_options - Customize the options for this request
            */
            usersIdMuting: (id, params = {}, request_options) => (0, request_1.paginate)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/muting`,
                params,
                method: "GET",
            }),
            /**
            * Mute User by User ID.
            *
        
            * Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.
            * @param id - The ID of the authenticated source User that is requesting to mute the target User.
            * @param request_body - The request_body for usersIdMute
            * @param request_options - Customize the options for this request
            */
            usersIdMute: (id, request_body, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${id}/muting`,
                request_body,
                method: "POST",
            }),
            /**
            * Unblock User by User ID
            *
        
            * Causes the source User to unblock the target User. The source User must match the User context authorizing the request
            * @param source_user_id - The ID of the authenticated source User that is requesting to unblock the target User.
            * @param target_user_id - The ID of the User that the source User is requesting to unblock.
            * @param request_options - Customize the options for this request
            */
            usersIdUnblock: (source_user_id, target_user_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${source_user_id}/blocking/${target_user_id}`,
                method: "DELETE",
            }),
            /**
            * Unfollow User
            *
        
            * Causes the source User to unfollow the target User. The source User must match the User context authorizing the request
            * @param source_user_id - The ID of the authenticated source User that is requesting to unfollow the target User.
            * @param target_user_id - The ID of the User that the source User is requesting to unfollow.
            * @param request_options - Customize the options for this request
            */
            usersIdUnfollow: (source_user_id, target_user_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${source_user_id}/following/${target_user_id}`,
                method: "DELETE",
            }),
            /**
            * Unmute User by User ID
            *
        
            * Causes the source User to unmute the target User. The source User must match the User context authorizing the request
            * @param source_user_id - The ID of the authenticated source User that is requesting to unmute the target User.
            * @param target_user_id - The ID of the User that the source User is requesting to unmute.
            * @param request_options - Customize the options for this request
            */
            usersIdUnmute: (source_user_id, target_user_id, request_options) => (0, request_1.rest)({
                auth: __classPrivateFieldGet(this, _Client_auth, "f"),
                ...__classPrivateFieldGet(this, _Client_defaultRequestOptions, "f"),
                ...request_options,
                endpoint: `/2/users/${source_user_id}/muting/${target_user_id}`,
                method: "DELETE",
            }),
        };
        this.version = "1.0.0";
        this.twitterApiOpenApiVersion = "2.49";
        __classPrivateFieldSet(this, _Client_auth, typeof auth === "string" ? new auth_1.OAuth2Bearer(auth) : auth, "f");
        __classPrivateFieldSet(this, _Client_defaultRequestOptions, {
            ...requestOptions,
            headers: {
                "User-Agent": "twitter-api-typescript-sdk/" + this.version,
                ...requestOptions?.headers,
            },
        }, "f");
    }
}
exports.Client = Client;
_Client_auth = new WeakMap(), _Client_defaultRequestOptions = new WeakMap();
