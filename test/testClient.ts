/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Client, Configuration, Environment } from '../src';

export const testClient = new Client(createConfigurationFromEnvironment());

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const environment = process.env.CYPRESS_TEST_API_LIB_ENVIRONMENT;
  const timeout = process.env.CYPRESS_TEST_API_LIB_TIMEOUT;

  if (environment !== undefined) {
    config.environment = environment as Environment;
  }

  if (timeout !== undefined && timeout !== '') {
    config.timeout = parseInt(timeout);
  }

  return config;
}
