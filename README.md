
# Getting Started with PayPal REST APIs

## Introduction

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders., Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>., The Payment Method Tokens API saves payment methods so payers don't have to enter details for future transactions. Payers can check out faster or pay without being present after they agree to save a payment method.<br><br>The API associates a payment method with a temporary setup token. Pass the setup token to the API to exchange the setup token for a permanent token.<br><br>The permanent token represents a payment method that's saved to the vault. This token can be used repeatedly for checkout or recurring transactions such as subscriptions.<br><br>The Payment Method Tokens API is available in the US only.

Find out more here: [https://developer.paypal.com/docs/api/orders/v2/](https://developer.paypal.com/docs/api/orders/v2/)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=PayPalRESTAPIs&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=PayPalRESTAPIs&workspaceName=paypal-rest-apislib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *PayPal REST APIsLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add PaypalRestApislib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=PayPalRESTAPIs&workspaceName=paypal-rest-apislib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install PaypalRestApislib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/partial-logging-options.md) | Logging Configuration to enable logging |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Sandbox,
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

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | PayPal Live Environment |
| Sandbox | **Default** PayPal Sandbox Environment |

## Authorization

This API uses the following authentication schemes.

* [`Oauth2 (OAuth 2 Client Credentials Grant)`](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Orders](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/controllers/orders.md)
* [Payments](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/controllers/payments.md)
* [Vault](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/controllers/vault.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/retry-configuration.md)
* [PartialLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/logger-interface.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/test-js-sdk/tree/9.5.6/doc/api-error.md)

