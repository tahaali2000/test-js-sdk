/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StatusEnum
 */
export enum StatusEnum {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

/**
 * Schema for StatusEnum
 */
export const statusEnumSchema: Schema<StatusEnum> = stringEnum(StatusEnum);
