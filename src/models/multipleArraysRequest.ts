/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface MultipleArraysRequest {
  /** An array containing items of type string */
  array1: string[];
  /** An array containing items of type integer */
  array2?: number[];
}

export const multipleArraysRequestSchema: Schema<MultipleArraysRequest> = object(
  {
    array1: ['Array1', array(string())],
    array2: ['Array2', optional(array(number()))],
  }
);
