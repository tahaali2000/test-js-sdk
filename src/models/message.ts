/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface Message {
  code: number;
  text: string;
}

export const messageSchema: Schema<Message> = object({
  code: ['code', number()],
  text: ['text', string()],
});
