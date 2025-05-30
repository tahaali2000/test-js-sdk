/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Item, itemSchema } from '../models/item';
import {
  MultipleArraysRequest,
  multipleArraysRequestSchema,
} from '../models/multipleArraysRequest';
import { Status3Enum, status3EnumSchema } from '../models/status3Enum';
import { TokensRequest, tokensRequestSchema } from '../models/tokensRequest';
import { optional, string, unknown } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';

export class ApiController extends BaseController {
  /**
   * Generates a new OAuth token with the specified scopes.
   *
   * @param body
   * @return Response from the API call
   */
  async createOAuthToken(
    body?: TokensRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/tokens');
    const mapped = req.prepareArgs({
      body: [body, optional(tokensRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad request');
    return req.call(requestOptions);
  }

  /**
   * Creates a new resource in the system.
   *
   *
   * @param status       The status of the items to filter by.
   * @param body         Custom model with additional properties
   * @return Response from the API call
   */
  async createanitem(
    status: Status3Enum,
    body?: Item,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown | undefined>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      status: [status, status3EnumSchema],
      body: [body, optional(itemSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/items/${mapped.status}`;
    req.throwOn(400, ApiError, 'Bad Syntax');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.throwOn(403, ApiError, 'Permission Denied');
    return req.callAsJson(optional(unknown()), requestOptions);
  }

  /**
   * @param id    The ID of the item to retrieve
   * @param value The value of the item to retrieve
   * @return Response from the API call
   */
  async getanitembyID(
    id: string,
    value: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Item>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, string()],
      value: [value, string()],
    });
    req.query('value', mapped.value);
    req.appendTemplatePath`/items/${mapped.id}`;
    return req.callAsJson(itemSchema, requestOptions);
  }

  /**
   * This endpoint accepts a complex structure with multiple arrays.
   *
   * @param body
   * @return Response from the API call
   */
  async testEndpointwithArrays(
    body?: MultipleArraysRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/multiple-arrays');
    const mapped = req.prepareArgs({
      body: [body, optional(multipleArraysRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad request');
    return req.call(requestOptions);
  }
}
