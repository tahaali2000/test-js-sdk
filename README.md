
# Getting Started with Cypress Test API

## Introduction

This is a sample API to demonstrate an OpenAPI spec with multiple endpoints and a custom model.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install test-sdk@2.1.8
```

For additional package details, see the [Npm page for the test-sdk@2.1.8 npm](https://www.npmjs.com/package/test-sdk/v/2.1.8).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/partial-logging-options.md) | Logging Configuration to enable logging |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## List of APIs

* [API](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/controllers/api.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/retry-configuration.md)
* [PartialLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/logger-interface.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/test-js-sdk/tree/2.1.8/doc/api-error.md)

