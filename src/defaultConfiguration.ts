/**
 * Cypress Test APILib
 *
 * This file was automatically generated for Newtest by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Configuration, Environment } from './configuration';
import {
  LoggingOptions,
  mergeLoggingOptions,
  NullLogger,
  RetryConfiguration,
} from './core';

/** Default values for the configuration parameters of the client. */
export const DEFAULT_CONFIGURATION: Configuration = {
  timeout: 0,
  environment: Environment.Production,
};

/** Default values for retry configuration parameters. */
export const DEFAULT_RETRY_CONFIG: RetryConfiguration = {
  maxNumberOfRetries: 0,
  retryOnTimeout: true,
  retryInterval: 1,
  maximumRetryWaitTime: 0,
  backoffFactor: 2,
  httpStatusCodesToRetry: [413, 503, 504],
  httpMethodsToRetry: ['GET', 'PUT', 'POST'],
};

/** Default values for logging options. */
export const DEFAULT_LOGGING_OPTIONS: LoggingOptions = mergeLoggingOptions({
  logger: new NullLogger(),
});
