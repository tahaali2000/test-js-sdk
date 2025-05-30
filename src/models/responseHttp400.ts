/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ResponseHttp400 {
  detail?: string;
}

export const responseHttp400Schema: Schema<ResponseHttp400> = object({
  detail: ['detail', optional(string())],
});
