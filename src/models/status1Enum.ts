/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status1Enum
 */
export enum Status1Enum {
  Enumvalue1 = 'enumvalue1',
  Enumvalue2 = 'enumvalue2',
  Enumvalue3 = 'enumvalue3',
}

/**
 * Schema for Status1Enum
 */
export const status1EnumSchema: Schema<Status1Enum> = stringEnum(Status1Enum);
