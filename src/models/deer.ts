/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Deer {
  name: string;
  type: string;
}

export const deerSchema: Schema<Deer> = object({
  name: ['name', string()],
  type: ['type', string()],
});
