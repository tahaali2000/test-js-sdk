
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](../doc/partial-logging-options.md) | Logging Configuration to enable logging |

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

## Cypress Test API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| aPI | Gets ApiController |

