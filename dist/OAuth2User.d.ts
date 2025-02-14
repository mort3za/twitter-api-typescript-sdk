import { AuthClient, AuthHeader } from "./types";
import { RequestOptions } from "./request";
export declare type OAuth2Scopes = "tweet.read" | "tweet.write" | "tweet.moderate.write" | "users.read" | "follows.read" | "follows.write" | "offline.access" | "space.read" | "mute.read" | "mute.write" | "like.read" | "like.write" | "list.read" | "list.write" | "block.read" | "block.write" | "bookmark.read" | "bookmark.write";
export interface OAuth2UserOptions {
    /** Can be found in the developer portal under the header "Client ID". */
    client_id: string;
    /** If you have selected an App type that is a confidential client you will be provided with a “Client Secret” under “Client ID” in your App’s keys and tokens section. */
    client_secret?: string;
    /**Your callback URL. This value must correspond to one of the Callback URLs defined in your App’s settings. For OAuth 2.0, you will need to have exact match validation for your callback URL. */
    callback: string;
    /** Scopes allow you to set granular access for your App so that your App only has the permissions that it needs. To learn more about what scopes map to what endpoints, view our {@link https://developer.twitter.com/en/docs/authentication/guides/v2-authentication-mapping authentication mapping guide}. */
    scopes: OAuth2Scopes[];
    /** Overwrite request options for all endpoints */
    request_options?: Partial<RequestOptions>;
}
export declare type GenerateAuthUrlOptions = {
    /** A random string you provide to verify against CSRF attacks.  The length of this string can be up to 500 characters. */
    state: string;
    /** Specifies the method you are using to make a request (S256 OR plain). */
    code_challenge_method: "s256";
} | {
    /** A random string you provide to verify against CSRF attacks.  The length of this string can be up to 500 characters. */
    state: string;
    /** A PKCE parameter, a random secret for each request you make. */
    code_challenge: string;
    /** Specifies the method you are using to make a request (S256 OR plain). */
    code_challenge_method?: "plain";
};
export interface RevokeAccessTokenParams {
    token_type_hint: string;
    token: string;
    client_id: string;
}
interface RevokeAccessTokenResponse {
    revoked: boolean;
}
interface GetTokenResponse {
    /** Allows an application to obtain a new access token without prompting the user via the refresh token flow. */
    refresh_token?: string;
    /** Access tokens are the token that applications use to make API requests on behalf of a user.  */
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    /** Comma-separated list of scopes for the token  */
    scope?: string;
}
interface Token extends Omit<GetTokenResponse, "expires_in"> {
    /** Date that the access_token will expire at.  */
    expires_at?: Date;
}
/**
 * Twitter OAuth2 Authentication Client
 */
export declare class OAuth2User implements AuthClient {
    #private;
    token?: Token;
    constructor(options: OAuth2UserOptions, code_verifier?: string);
    /**
     * Refresh the access token
     */
    refreshAccessToken(): Promise<{
        token: Token;
    }>;
    /**
     * Check if an access token is expired
     */
    isAccessTokenExpired(): boolean;
    /**
     * Request an access token
     */
    requestAccessToken(code?: string): Promise<{
        token: Token;
    }>;
    /**
     * Revoke an access token
     */
    revokeAccessToken(): Promise<RevokeAccessTokenResponse>;
    generateAuthURL(options: GenerateAuthUrlOptions): string;
    getAuthHeader(): Promise<AuthHeader>;
}
export {};
