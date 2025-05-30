/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Message2 {
  code?: number;
  text?: string;
}

export const message2Schema: Schema<Message2> = object({
  code: ['code', optional(number())],
  text: ['text', optional(string())],
});
