/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status3Enum
 */
export enum Status3Enum {
  Enumvalue1 = 'enumvalue1',
  Enumvalue2 = 'enumvalue2',
  Enumvalue3 = 'enumvalue3',
}

/**
 * Schema for Status3Enum
 */
export const status3EnumSchema: Schema<Status3Enum> = stringEnum(Status3Enum);
