/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ItemResponse {
  id?: string;
  name?: string;
  message?: string;
}

export const itemResponseSchema: Schema<ItemResponse> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  message: ['message', optional(string())],
});
