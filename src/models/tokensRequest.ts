/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema } from '../schema';
import {
  OAuthScopeOAuthACGEnum,
  oAuthScopeOAuthACGEnumSchema,
} from './oAuthScopeOAuthACGEnum';

export interface TokensRequest {
  /** List of scopes that apply to the OAuth token */
  scopes: OAuthScopeOAuthACGEnum[];
}

export const tokensRequestSchema: Schema<TokensRequest> = object({
  scopes: ['scopes', array(oAuthScopeOAuthACGEnumSchema)],
});
