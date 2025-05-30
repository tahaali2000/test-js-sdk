/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ResponseHttp404 {
  id?: string;
}

export const responseHttp404Schema: Schema<ResponseHttp404> = object({
  id: ['id', optional(string())],
});
