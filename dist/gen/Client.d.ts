import { RequestOptions } from "../request";
import { AuthClient, TwitterResponse, TwitterBody, TwitterParams, TwitterPaginatedResponse } from "../types";
import { listBatchComplianceJobs, createBatchComplianceJob, getBatchComplianceJob, listIdCreate, listIdDelete, listIdGet, listIdUpdate, listGetFollowers, listGetMembers, listAddMember, listRemoveMember, listsIdTweets, getOpenApiSpec, findSpacesByIds, findSpacesByCreatorIds, searchSpaces, findSpaceById, spaceBuyers, spaceTweets, findTweetsById, createTweet, getTweetsComplianceStream, tweetCountsFullArchiveSearch, tweetCountsRecentSearch, getTweetsFirehoseStream, sampleStream, getTweetsSample10Stream, tweetsFullarchiveSearch, tweetsRecentSearch, searchStream, getRules, addOrDeleteRules, deleteTweetById, findTweetById, tweetsIdLikingUsers, findTweetsThatQuoteATweet, tweetsIdRetweetingUsers, hideReplyById, findUsersById, findUsersByUsername, findUserByUsername, getUsersComplianceStream, findMyUser, findUserById, usersIdBlocking, usersIdBlock, getUsersIdBookmarks, postUsersIdBookmarks, usersIdBookmarksDelete, userFollowedLists, listUserFollow, listUserUnfollow, usersIdFollowers, usersIdFollowing, usersIdFollow, usersIdLikedTweets, usersIdLike, usersIdUnlike, getUserListMemberships, usersIdMentions, usersIdMuting, usersIdMute, listUserOwnedLists, listUserPinnedLists, listUserPin, listUserUnpin, usersIdRetweets, usersIdUnretweets, usersIdTimeline, usersIdTweets, usersIdUnblock, usersIdUnfollow, usersIdUnmute } from "./openapi-types";
/**
 * Twitter API TypeScript Client
 *
 * TypeScript SDK for use with the Twitter API
 *
 */
export declare class Client {
    #private;
    version: string;
    twitterApiOpenApiVersion: string;
    constructor(auth: string | AuthClient, requestOptions?: Partial<RequestOptions>);
    /**
     * Bookmarks
     *
     * Endpoints related to retrieving, managing bookmarks of a user
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/bookmarks
     */
    readonly bookmarks: {
        /**
        * Bookmarks by User
        *
    
        * Returns Tweet objects that have been bookmarked by the requesting User
        * @param id - The ID of the authenticated source User for whom to return results.
        * @param params - The params for getUsersIdBookmarks
        * @param request_options - Customize the options for this request
        */
        getUsersIdBookmarks: (id: string, params?: TwitterParams<getUsersIdBookmarks>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<getUsersIdBookmarks>>;
        /**
        * Add Tweet to Bookmarks
        *
    
        * Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks
        * @param id - The ID of the authenticated source User for whom to add bookmarks.
        * @param request_body - The request_body for postUsersIdBookmarks
        * @param request_options - Customize the options for this request
        */
        postUsersIdBookmarks: (id: string, request_body: TwitterBody<postUsersIdBookmarks>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<postUsersIdBookmarks>>;
        /**
        * Remove a bookmarked Tweet
        *
    
        * Removes a Tweet from the requesting User's bookmarked Tweets.
        * @param id - The ID of the authenticated source User whose bookmark is to be removed.
        * @param tweet_id - The ID of the Tweet that the source User is removing from bookmarks.
        * @param request_options - Customize the options for this request
        */
        usersIdBookmarksDelete: (id: string, tweet_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdBookmarksDelete>>;
    };
    /**
     * Compliance
     *
     * Endpoints related to keeping Twitter data in your systems compliant
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/compliance/batch-tweet/introduction
     */
    readonly compliance: {
        /**
        * List Compliance Jobs
        *
    
        * Returns recent Compliance Jobs for a given job type and optional job status
        * @param params - The params for listBatchComplianceJobs
        * @param request_options - Customize the options for this request
        */
        listBatchComplianceJobs: (params: TwitterParams<listBatchComplianceJobs>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listBatchComplianceJobs>>;
        /**
        * Create compliance job
        *
    
        * Creates a compliance for the given job type
        * @param request_body - The request_body for createBatchComplianceJob
        * @param request_options - Customize the options for this request
        */
        createBatchComplianceJob: (request_body: TwitterBody<createBatchComplianceJob>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<createBatchComplianceJob>>;
        /**
        * Get Compliance Job
        *
    
        * Returns a single Compliance Job by ID
        * @param id - The ID of the Compliance Job to retrieve.
        * @param params - The params for getBatchComplianceJob
        * @param request_options - Customize the options for this request
        */
        getBatchComplianceJob: (id: string, params?: TwitterParams<getBatchComplianceJob>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<getBatchComplianceJob>>;
        /**
        * Tweets Compliance stream
        *
    
        * Streams 100% of compliance data for Tweets
        * @param params - The params for getTweetsComplianceStream
        * @param request_options - Customize the options for this request
        */
        getTweetsComplianceStream: (params: TwitterParams<getTweetsComplianceStream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<getTweetsComplianceStream>>;
        /**
        * Users Compliance stream
        *
    
        * Streams 100% of compliance data for Users
        * @param params - The params for getUsersComplianceStream
        * @param request_options - Customize the options for this request
        */
        getUsersComplianceStream: (params: TwitterParams<getUsersComplianceStream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<getUsersComplianceStream>>;
    };
    /**
     * General
     *
     * Miscellaneous endpoints for general API functionality
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api
     */
    readonly general: {
        /**
        * Returns the OpenAPI Specification document.
        *
    
        * Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
        * @param request_options - Customize the options for this request
        */
        getOpenApiSpec: (request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<getOpenApiSpec>>;
    };
    /**
     * Lists
     *
     * Endpoints related to retrieving, managing Lists
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/lists
     */
    readonly lists: {
        /**
        * Create List
        *
    
        * Creates a new List.
        * @param request_body - The request_body for listIdCreate
        * @param request_options - Customize the options for this request
        */
        listIdCreate: (request_body: TwitterBody<listIdCreate>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listIdCreate>>;
        /**
        * Delete List
        *
    
        * Delete a List that you own.
        * @param id - The ID of the List to delete.
        * @param request_options - Customize the options for this request
        */
        listIdDelete: (id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listIdDelete>>;
        /**
        * List lookup by List ID.
        *
    
        * Returns a List.
        * @param id - The ID of the List.
        * @param params - The params for listIdGet
        * @param request_options - Customize the options for this request
        */
        listIdGet: (id: string, params?: TwitterParams<listIdGet>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listIdGet>>;
        /**
        * Update List.
        *
    
        * Update a List that you own.
        * @param id - The ID of the List to modify.
        * @param request_body - The request_body for listIdUpdate
        * @param request_options - Customize the options for this request
        */
        listIdUpdate: (id: string, request_body: TwitterBody<listIdUpdate>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listIdUpdate>>;
        /**
        * Add a List member
        *
    
        * Causes a User to become a member of a List.
        * @param id - The ID of the List for which to add a member.
        * @param request_body - The request_body for listAddMember
        * @param request_options - Customize the options for this request
        */
        listAddMember: (id: string, request_body: TwitterBody<listAddMember>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listAddMember>>;
        /**
        * Remove a List member
        *
    
        * Causes a User to be removed from the members of a List.
        * @param id - The ID of the List to remove a member.
        * @param user_id - The ID of User that will be removed from the List.
        * @param request_options - Customize the options for this request
        */
        listRemoveMember: (id: string, user_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listRemoveMember>>;
        /**
        * Get User's Followed Lists
        *
    
        * Returns a User's followed Lists.
        * @param id - The ID of the User to lookup.
        * @param params - The params for userFollowedLists
        * @param request_options - Customize the options for this request
        */
        userFollowedLists: (id: string, params?: TwitterParams<userFollowedLists>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<userFollowedLists>>;
        /**
        * Follow a List
        *
    
        * Causes a User to follow a List.
        * @param id - The ID of the authenticated source User that will follow the List.
        * @param request_body - The request_body for listUserFollow
        * @param request_options - Customize the options for this request
        */
        listUserFollow: (id: string, request_body: TwitterBody<listUserFollow>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listUserFollow>>;
        /**
        * Unfollow a List
        *
    
        * Causes a User to unfollow a List.
        * @param id - The ID of the authenticated source User that will unfollow the List.
        * @param list_id - The ID of the List to unfollow.
        * @param request_options - Customize the options for this request
        */
        listUserUnfollow: (id: string, list_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listUserUnfollow>>;
        /**
        * Get a User's List Memberships
        *
    
        * Get a User's List Memberships.
        * @param id - The ID of the User to lookup.
        * @param params - The params for getUserListMemberships
        * @param request_options - Customize the options for this request
        */
        getUserListMemberships: (id: string, params?: TwitterParams<getUserListMemberships>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<getUserListMemberships>>;
        /**
        * Get a User's Owned Lists.
        *
    
        * Get a User's Owned Lists.
        * @param id - The ID of the User to lookup.
        * @param params - The params for listUserOwnedLists
        * @param request_options - Customize the options for this request
        */
        listUserOwnedLists: (id: string, params?: TwitterParams<listUserOwnedLists>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<listUserOwnedLists>>;
        /**
        * Get a User's Pinned Lists
        *
    
        * Get a User's Pinned Lists.
        * @param id - The ID of the authenticated source User for whom to return results.
        * @param params - The params for listUserPinnedLists
        * @param request_options - Customize the options for this request
        */
        listUserPinnedLists: (id: string, params?: TwitterParams<listUserPinnedLists>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listUserPinnedLists>>;
        /**
        * Pin a List
        *
    
        * Causes a User to pin a List.
        * @param id - The ID of the authenticated source User that will pin the List.
        * @param request_body - The request_body for listUserPin
        * @param request_options - Customize the options for this request
        */
        listUserPin: (id: string, request_body: TwitterBody<listUserPin>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listUserPin>>;
        /**
        * Unpin a List
        *
    
        * Causes a User to remove a pinned List.
        * @param id - The ID of the authenticated source User for whom to return results.
        * @param list_id - The ID of the List to unpin.
        * @param request_options - Customize the options for this request
        */
        listUserUnpin: (id: string, list_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<listUserUnpin>>;
    };
    /**
     * Spaces
     *
     * Endpoints related to retrieving, managing Spaces
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/spaces
     */
    readonly spaces: {
        /**
        * Space lookup up Space IDs
        *
    
        * Returns a variety of information about the Spaces specified by the requested IDs
        * @param params - The params for findSpacesByIds
        * @param request_options - Customize the options for this request
        */
        findSpacesByIds: (params: TwitterParams<findSpacesByIds>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findSpacesByIds>>;
        /**
        * Space lookup by their creators
        *
    
        * Returns a variety of information about the Spaces created by the provided User IDs
        * @param params - The params for findSpacesByCreatorIds
        * @param request_options - Customize the options for this request
        */
        findSpacesByCreatorIds: (params: TwitterParams<findSpacesByCreatorIds>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findSpacesByCreatorIds>>;
        /**
        * Search for Spaces
        *
    
        * Returns Spaces that match the provided query.
        * @param params - The params for searchSpaces
        * @param request_options - Customize the options for this request
        */
        searchSpaces: (params: TwitterParams<searchSpaces>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<searchSpaces>>;
        /**
        * Space lookup by Space ID
        *
    
        * Returns a variety of information about the Space specified by the requested ID
        * @param id - The ID of the Space to be retrieved.
        * @param params - The params for findSpaceById
        * @param request_options - Customize the options for this request
        */
        findSpaceById: (id: string, params?: TwitterParams<findSpaceById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findSpaceById>>;
        /**
        * Retrieve the list of Users who purchased a ticket to the given space
        *
    
        * Retrieves the list of Users who purchased a ticket to the given space
        * @param id - The ID of the Space to be retrieved.
        * @param params - The params for spaceBuyers
        * @param request_options - Customize the options for this request
        */
        spaceBuyers: (id: string, params?: TwitterParams<spaceBuyers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<spaceBuyers>>;
        /**
        * Retrieve Tweets from a Space.
        *
    
        * Retrieves Tweets shared in the specified Space.
        * @param id - The ID of the Space to be retrieved.
        * @param params - The params for spaceTweets
        * @param request_options - Customize the options for this request
        */
        spaceTweets: (id: string, params?: TwitterParams<spaceTweets>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<spaceTweets>>;
    };
    /**
     * Tweets
     *
     * Endpoints related to retrieving, searching, and modifying Tweets
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/tweets/lookup
     */
    readonly tweets: {
        /**
        * List Tweets timeline by List ID.
        *
    
        * Returns a list of Tweets associated with the provided List ID.
        * @param id - The ID of the List.
        * @param params - The params for listsIdTweets
        * @param request_options - Customize the options for this request
        */
        listsIdTweets: (id: string, params?: TwitterParams<listsIdTweets>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<listsIdTweets>>;
        /**
        * Tweet lookup by Tweet IDs
        *
    
        * Returns a variety of information about the Tweet specified by the requested ID.
        * @param params - The params for findTweetsById
        * @param request_options - Customize the options for this request
        */
        findTweetsById: (params: TwitterParams<findTweetsById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findTweetsById>>;
        /**
        * Creation of a Tweet
        *
    
        * Causes the User to create a Tweet under the authorized account.
        * @param request_body - The request_body for createTweet
        * @param request_options - Customize the options for this request
        */
        createTweet: (request_body: TwitterBody<createTweet>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<createTweet>>;
        /**
        * Full archive search counts
        *
    
        * Returns Tweet Counts that match a search query.
        * @param params - The params for tweetCountsFullArchiveSearch
        * @param request_options - Customize the options for this request
        */
        tweetCountsFullArchiveSearch: (params: TwitterParams<tweetCountsFullArchiveSearch>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetCountsFullArchiveSearch>>;
        /**
        * Recent search counts
        *
    
        * Returns Tweet Counts from the last 7 days that match a search query.
        * @param params - The params for tweetCountsRecentSearch
        * @param request_options - Customize the options for this request
        */
        tweetCountsRecentSearch: (params: TwitterParams<tweetCountsRecentSearch>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetCountsRecentSearch>>;
        /**
        * Firehose stream
        *
    
        * Streams 100% of public Tweets.
        * @param params - The params for getTweetsFirehoseStream
        * @param request_options - Customize the options for this request
        */
        getTweetsFirehoseStream: (params: TwitterParams<getTweetsFirehoseStream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<getTweetsFirehoseStream>>;
        /**
        * Sample stream
        *
    
        * Streams a deterministic 1% of public Tweets.
        * @param params - The params for sampleStream
        * @param request_options - Customize the options for this request
        */
        sampleStream: (params?: TwitterParams<sampleStream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<sampleStream>>;
        /**
        * Sample 10% stream
        *
    
        * Streams a deterministic 10% of public Tweets.
        * @param params - The params for getTweetsSample10Stream
        * @param request_options - Customize the options for this request
        */
        getTweetsSample10Stream: (params: TwitterParams<getTweetsSample10Stream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<getTweetsSample10Stream>>;
        /**
        * Full-archive search
        *
    
        * Returns Tweets that match a search query.
        * @param params - The params for tweetsFullarchiveSearch
        * @param request_options - Customize the options for this request
        */
        tweetsFullarchiveSearch: (params: TwitterParams<tweetsFullarchiveSearch>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetsFullarchiveSearch>>;
        /**
        * Recent search
        *
    
        * Returns Tweets from the last 7 days that match a search query.
        * @param params - The params for tweetsRecentSearch
        * @param request_options - Customize the options for this request
        */
        tweetsRecentSearch: (params: TwitterParams<tweetsRecentSearch>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetsRecentSearch>>;
        /**
        * Filtered stream
        *
    
        * Streams Tweets matching the stream's active rule set.
        * @param params - The params for searchStream
        * @param request_options - Customize the options for this request
        */
        searchStream: (params?: TwitterParams<searchStream>, request_options?: Partial<RequestOptions>) => AsyncGenerator<TwitterResponse<searchStream>>;
        /**
        * Rules lookup
        *
    
        * Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
        * @param params - The params for getRules
        * @param request_options - Customize the options for this request
        */
        getRules: (params?: TwitterParams<getRules>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<getRules>>;
        /**
        * Add/Delete rules
        *
    
        * Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
        * @param params - The params for addOrDeleteRules
        * @param request_body - The request_body for addOrDeleteRules
        * @param request_options - Customize the options for this request
        */
        addOrDeleteRules: (request_body: TwitterBody<addOrDeleteRules>, params?: TwitterParams<addOrDeleteRules>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<addOrDeleteRules>>;
        /**
        * Tweet delete by Tweet ID
        *
    
        * Delete specified Tweet (in the path) by ID.
        * @param id - The ID of the Tweet to be deleted.
        * @param request_options - Customize the options for this request
        */
        deleteTweetById: (id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<deleteTweetById>>;
        /**
        * Tweet lookup by Tweet ID
        *
    
        * Returns a variety of information about the Tweet specified by the requested ID.
        * @param id - A single Tweet ID.
        * @param params - The params for findTweetById
        * @param request_options - Customize the options for this request
        */
        findTweetById: (id: string, params?: TwitterParams<findTweetById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findTweetById>>;
        /**
        * Retrieve Tweets that quote a Tweet.
        *
    
        * Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.
        * @param id - A single Tweet ID.
        * @param params - The params for findTweetsThatQuoteATweet
        * @param request_options - Customize the options for this request
        */
        findTweetsThatQuoteATweet: (id: string, params?: TwitterParams<findTweetsThatQuoteATweet>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<findTweetsThatQuoteATweet>>;
        /**
        * Hide replies
        *
    
        * Hides or unhides a reply to an owned conversation.
        * @param tweet_id - The ID of the reply that you want to hide or unhide.
        * @param request_body - The request_body for hideReplyById
        * @param request_options - Customize the options for this request
        */
        hideReplyById: (tweet_id: string, request_body: TwitterBody<hideReplyById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<hideReplyById>>;
        /**
        * Returns Tweet objects liked by the provided User ID
        *
    
        * Returns a list of Tweets liked by the provided User ID
        * @param id - The ID of the User to lookup.
        * @param params - The params for usersIdLikedTweets
        * @param request_options - Customize the options for this request
        */
        usersIdLikedTweets: (id: string, params?: TwitterParams<usersIdLikedTweets>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdLikedTweets>>;
        /**
        * Causes the User (in the path) to like the specified Tweet
        *
    
        * Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.
        * @param id - The ID of the authenticated source User that is requesting to like the Tweet.
        * @param request_body - The request_body for usersIdLike
        * @param request_options - Customize the options for this request
        */
        usersIdLike: (id: string, request_body: TwitterBody<usersIdLike>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdLike>>;
        /**
        * Causes the User (in the path) to unlike the specified Tweet
        *
    
        * Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request
        * @param id - The ID of the authenticated source User that is requesting to unlike the Tweet.
        * @param tweet_id - The ID of the Tweet that the User is requesting to unlike.
        * @param request_options - Customize the options for this request
        */
        usersIdUnlike: (id: string, tweet_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdUnlike>>;
        /**
        * User mention timeline by User ID
        *
    
        * Returns Tweet objects that mention username associated to the provided User ID
        * @param id - The ID of the User to lookup.
        * @param params - The params for usersIdMentions
        * @param request_options - Customize the options for this request
        */
        usersIdMentions: (id: string, params?: TwitterParams<usersIdMentions>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdMentions>>;
        /**
        * Causes the User (in the path) to retweet the specified Tweet.
        *
    
        * Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.
        * @param id - The ID of the authenticated source User that is requesting to retweet the Tweet.
        * @param request_body - The request_body for usersIdRetweets
        * @param request_options - Customize the options for this request
        */
        usersIdRetweets: (id: string, request_body: TwitterBody<usersIdRetweets>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdRetweets>>;
        /**
        * Causes the User (in the path) to unretweet the specified Tweet
        *
    
        * Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request
        * @param id - The ID of the authenticated source User that is requesting to retweet the Tweet.
        * @param source_tweet_id - The ID of the Tweet that the User is requesting to unretweet.
        * @param request_options - Customize the options for this request
        */
        usersIdUnretweets: (id: string, source_tweet_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdUnretweets>>;
        /**
        * User home timeline by User ID
        *
    
        * Returns Tweet objects that appears in the provided User ID's home timeline
        * @param id - The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
        * @param params - The params for usersIdTimeline
        * @param request_options - Customize the options for this request
        */
        usersIdTimeline: (id: string, params?: TwitterParams<usersIdTimeline>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdTimeline>>;
        /**
        * User Tweets timeline by User ID
        *
    
        * Returns a list of Tweets authored by the provided User ID
        * @param id - The ID of the User to lookup.
        * @param params - The params for usersIdTweets
        * @param request_options - Customize the options for this request
        */
        usersIdTweets: (id: string, params?: TwitterParams<usersIdTweets>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdTweets>>;
    };
    /**
     * Users
     *
     * Endpoints related to retrieving, managing relationships of Users
     *
     * Find out more
     * https://developer.twitter.com/en/docs/twitter-api/users/lookup
     */
    readonly users: {
        /**
        * Returns User objects that follow a List by the provided List ID
        *
    
        * Returns a list of Users that follow a List by the provided List ID
        * @param id - The ID of the List.
        * @param params - The params for listGetFollowers
        * @param request_options - Customize the options for this request
        */
        listGetFollowers: (id: string, params?: TwitterParams<listGetFollowers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<listGetFollowers>>;
        /**
        * Returns User objects that are members of a List by the provided List ID.
        *
    
        * Returns a list of Users that are members of a List by the provided List ID.
        * @param id - The ID of the List.
        * @param params - The params for listGetMembers
        * @param request_options - Customize the options for this request
        */
        listGetMembers: (id: string, params?: TwitterParams<listGetMembers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<listGetMembers>>;
        /**
        * Returns User objects that have liked the provided Tweet ID
        *
    
        * Returns a list of Users that have liked the provided Tweet ID
        * @param id - A single Tweet ID.
        * @param params - The params for tweetsIdLikingUsers
        * @param request_options - Customize the options for this request
        */
        tweetsIdLikingUsers: (id: string, params?: TwitterParams<tweetsIdLikingUsers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetsIdLikingUsers>>;
        /**
        * Returns User objects that have retweeted the provided Tweet ID
        *
    
        * Returns a list of Users that have retweeted the provided Tweet ID
        * @param id - A single Tweet ID.
        * @param params - The params for tweetsIdRetweetingUsers
        * @param request_options - Customize the options for this request
        */
        tweetsIdRetweetingUsers: (id: string, params?: TwitterParams<tweetsIdRetweetingUsers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<tweetsIdRetweetingUsers>>;
        /**
        * User lookup by IDs
        *
    
        * This endpoint returns information about Users. Specify Users by their ID.
        * @param params - The params for findUsersById
        * @param request_options - Customize the options for this request
        */
        findUsersById: (params: TwitterParams<findUsersById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findUsersById>>;
        /**
        * User lookup by usernames
        *
    
        * This endpoint returns information about Users. Specify Users by their username.
        * @param params - The params for findUsersByUsername
        * @param request_options - Customize the options for this request
        */
        findUsersByUsername: (params: TwitterParams<findUsersByUsername>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findUsersByUsername>>;
        /**
        * User lookup by username
        *
    
        * This endpoint returns information about a User. Specify User by username.
        * @param username - A username.
        * @param params - The params for findUserByUsername
        * @param request_options - Customize the options for this request
        */
        findUserByUsername: (username: string, params?: TwitterParams<findUserByUsername>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findUserByUsername>>;
        /**
        * User lookup me
        *
    
        * This endpoint returns information about the requesting User.
        * @param params - The params for findMyUser
        * @param request_options - Customize the options for this request
        */
        findMyUser: (params?: TwitterParams<findMyUser>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findMyUser>>;
        /**
        * User lookup by ID
        *
    
        * This endpoint returns information about a User. Specify User by ID.
        * @param id - The ID of the User to lookup.
        * @param params - The params for findUserById
        * @param request_options - Customize the options for this request
        */
        findUserById: (id: string, params?: TwitterParams<findUserById>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<findUserById>>;
        /**
        * Returns User objects that are blocked by provided User ID
        *
    
        * Returns a list of Users that are blocked by the provided User ID
        * @param id - The ID of the authenticated source User for whom to return results.
        * @param params - The params for usersIdBlocking
        * @param request_options - Customize the options for this request
        */
        usersIdBlocking: (id: string, params?: TwitterParams<usersIdBlocking>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdBlocking>>;
        /**
        * Block User by User ID
        *
    
        * Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request
        * @param id - The ID of the authenticated source User that is requesting to block the target User.
        * @param request_body - The request_body for usersIdBlock
        * @param request_options - Customize the options for this request
        */
        usersIdBlock: (id: string, request_body: TwitterBody<usersIdBlock>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdBlock>>;
        /**
        * Returns User objects that follow a List by the provided User ID
        *
    
        * Returns a list of Users that follow the provided User ID
        * @param id - The ID of the User to lookup.
        * @param params - The params for usersIdFollowers
        * @param request_options - Customize the options for this request
        */
        usersIdFollowers: (id: string, params?: TwitterParams<usersIdFollowers>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdFollowers>>;
        /**
        * Following by User ID
        *
    
        * Returns a list of Users that are being followed by the provided User ID
        * @param id - The ID of the User to lookup.
        * @param params - The params for usersIdFollowing
        * @param request_options - Customize the options for this request
        */
        usersIdFollowing: (id: string, params?: TwitterParams<usersIdFollowing>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdFollowing>>;
        /**
        * Follow User
        *
    
        * Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request
        * @param id - The ID of the authenticated source User that is requesting to follow the target User.
        * @param request_body - The request_body for usersIdFollow
        * @param request_options - Customize the options for this request
        */
        usersIdFollow: (id: string, request_body: TwitterBody<usersIdFollow>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdFollow>>;
        /**
        * Returns User objects that are muted by the provided User ID
        *
    
        * Returns a list of Users that are muted by the provided User ID
        * @param id - The ID of the authenticated source User for whom to return results.
        * @param params - The params for usersIdMuting
        * @param request_options - Customize the options for this request
        */
        usersIdMuting: (id: string, params?: TwitterParams<usersIdMuting>, request_options?: Partial<RequestOptions>) => TwitterPaginatedResponse<TwitterResponse<usersIdMuting>>;
        /**
        * Mute User by User ID.
        *
    
        * Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.
        * @param id - The ID of the authenticated source User that is requesting to mute the target User.
        * @param request_body - The request_body for usersIdMute
        * @param request_options - Customize the options for this request
        */
        usersIdMute: (id: string, request_body: TwitterBody<usersIdMute>, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdMute>>;
        /**
        * Unblock User by User ID
        *
    
        * Causes the source User to unblock the target User. The source User must match the User context authorizing the request
        * @param source_user_id - The ID of the authenticated source User that is requesting to unblock the target User.
        * @param target_user_id - The ID of the User that the source User is requesting to unblock.
        * @param request_options - Customize the options for this request
        */
        usersIdUnblock: (source_user_id: string, target_user_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdUnblock>>;
        /**
        * Unfollow User
        *
    
        * Causes the source User to unfollow the target User. The source User must match the User context authorizing the request
        * @param source_user_id - The ID of the authenticated source User that is requesting to unfollow the target User.
        * @param target_user_id - The ID of the User that the source User is requesting to unfollow.
        * @param request_options - Customize the options for this request
        */
        usersIdUnfollow: (source_user_id: string, target_user_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdUnfollow>>;
        /**
        * Unmute User by User ID
        *
    
        * Causes the source User to unmute the target User. The source User must match the User context authorizing the request
        * @param source_user_id - The ID of the authenticated source User that is requesting to unmute the target User.
        * @param target_user_id - The ID of the User that the source User is requesting to unmute.
        * @param request_options - Customize the options for this request
        */
        usersIdUnmute: (source_user_id: string, target_user_id: string, request_options?: Partial<RequestOptions>) => Promise<TwitterResponse<usersIdUnmute>>;
    };
}
