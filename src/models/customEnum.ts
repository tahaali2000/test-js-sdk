/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CustomEnum
 */
export enum CustomEnum {
  VALUE1 = 'VALUE1',
  VALUE2 = 'VALUE2',
  VALUE3 = 'VALUE3',
}

/**
 * Schema for CustomEnum
 */
export const customEnumSchema: Schema<CustomEnum> = stringEnum(CustomEnum);
