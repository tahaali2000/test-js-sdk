# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Create O Auth Token](../../doc/controllers/api.md#create-o-auth-token)
* [Createanitem](../../doc/controllers/api.md#createanitem)
* [Getanitemby ID](../../doc/controllers/api.md#getanitemby-id)
* [Test Endpointwith Arrays](../../doc/controllers/api.md#test-endpointwith-arrays)


# Create O Auth Token

Generates a new OAuth token with the specified scopes.

```ts
async createOAuthToken(
  body?: TokensRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokensRequest \| undefined`](../../doc/models/tokens-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await apiController.createOAuthToken();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |


# Createanitem

Creates a new resource in the system.

```ts
async createanitem(
  status: Status3Enum,
  body?: Item,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status3Enum`](../../doc/models/status-3-enum.md) | Template, Required | The status of the items to filter by. |
| `body` | [`Item \| undefined`](../../doc/models/item.md) | Body, Optional | Custom model with additional properties |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type unknown.

## Example Usage

```ts
const status = Status3Enum.Enumvalue3;

const body: Item = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: 'John Doe',
  date: '2024-05-24',
  dateTime: '05/24/2024 12:00:00',
  decimal: 1234.56,
  mLong: BigInt(1234567890123),
  bool: true,
  customEnum: CustomEnum.VALUE3,
  jsonObject: { 'key1': 'val1', 'key2': 'val2' },
  animal: { 'key1': 'val1', 'key2': 'val2' },
  map: {
    'key0': {
      code: 246,
      text: 'text4',
    },
    'key1': {
      code: 246,
      text: 'text4',
    }
  },
};

try {
  const { result, ...httpResponse } = await apiController.createanitem(
  status,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "match": "client_mac",
  "name": "cameras",
  "type": "match",
  "values": [
    "010203040506",
    "abcdef*"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Syntax | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Permission Denied | `ApiError` |


# Getanitemby ID

```ts
async getanitembyID(
  id: string,
  value: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Item>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the item to retrieve |
| `value` | `string` | Query, Required | The value of the item to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [Item](../../doc/models/item.md).

## Example Usage

```ts
const id = 'id0';

const value = 'value2';

try {
  const { result, ...httpResponse } = await apiController.getanitembyID(
  id,
  value
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Test Endpointwith Arrays

This endpoint accepts a complex structure with multiple arrays.

```ts
async testEndpointwithArrays(
  body?: MultipleArraysRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MultipleArraysRequest \| undefined`](../../doc/models/multiple-arrays-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await apiController.testEndpointwithArrays();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |

