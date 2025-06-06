/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';
import { PartialLoggingOptions } from './core';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
  logging?: PartialLoggingOptions;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
}
