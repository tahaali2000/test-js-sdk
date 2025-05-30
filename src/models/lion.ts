/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Lion {
  id: string;
  type: string;
}

export const lionSchema: Schema<Lion> = object({
  id: ['id', string()],
  type: ['type', string()],
});
