/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiController } from '../src';
import { testClient } from './testClient';
import { makeApiCall } from './testHelper';

describe('ApiController', () => {
  let controller : ApiController;

  beforeAll(() => {
    controller = new ApiController(testClient);
  });

  it('should Test CreateOAuthToken', async () => {
    const response = await makeApiCall(
      () => controller.createOAuthToken(undefined)
    );

    expect(response.statusCode).toBe(201);
  });

  it('should Test TestEndpointwithArrays', async () => {
    const response = await makeApiCall(
      () => controller.testEndpointwithArrays(undefined)
    );

    expect(response.statusCode).toBe(200);
  });
});
