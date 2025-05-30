/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OAuthScopeOAuthACGEnum
 */
export enum OAuthScopeOAuthACGEnum {
  EnumFileRequestsread = 'file_requests.read',
  Zahra = 'zahra',
  Test1 = 'test1',
  Selection = 'selection',
}

/**
 * Schema for OAuthScopeOAuthACGEnum
 */
export const oAuthScopeOAuthACGEnumSchema: Schema<OAuthScopeOAuthACGEnum> = stringEnum(
  OAuthScopeOAuthACGEnum
);
