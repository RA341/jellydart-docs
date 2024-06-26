# jellydart.api.UserApi

## Load the API package
```dart
import 'package:jellydart/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateUser**](UserApi.md#authenticateuser) | **POST** /Users/{userId}/Authenticate | Authenticates a user.
[**authenticateUserByName**](UserApi.md#authenticateuserbyname) | **POST** /Users/AuthenticateByName | Authenticates a user by name.
[**authenticateWithQuickConnect**](UserApi.md#authenticatewithquickconnect) | **POST** /Users/AuthenticateWithQuickConnect | Authenticates a user with quick connect.
[**createUserByName**](UserApi.md#createuserbyname) | **POST** /Users/New | Creates a user.
[**deleteUser**](UserApi.md#deleteuser) | **DELETE** /Users/{userId} | Deletes a user.
[**forgotPassword**](UserApi.md#forgotpassword) | **POST** /Users/ForgotPassword | Initiates the forgot password process for a local user.
[**forgotPasswordPin**](UserApi.md#forgotpasswordpin) | **POST** /Users/ForgotPassword/Pin | Redeems a forgot password pin.
[**getCurrentUser**](UserApi.md#getcurrentuser) | **GET** /Users/Me | Gets the user based on auth token.
[**getPublicUsers**](UserApi.md#getpublicusers) | **GET** /Users/Public | Gets a list of publicly visible users for display on a login screen.
[**getUserById**](UserApi.md#getuserbyid) | **GET** /Users/{userId} | Gets a user by Id.
[**getUsers**](UserApi.md#getusers) | **GET** /Users | Gets a list of users.
[**updateUser**](UserApi.md#updateuser) | **POST** /Users/{userId} | Updates a user.
[**updateUserConfiguration**](UserApi.md#updateuserconfiguration) | **POST** /Users/{userId}/Configuration | Updates a user configuration.
[**updateUserEasyPassword**](UserApi.md#updateusereasypassword) | **POST** /Users/{userId}/EasyPassword | Updates a user's easy password.
[**updateUserPassword**](UserApi.md#updateuserpassword) | **POST** /Users/{userId}/Password | Updates a user's password.
[**updateUserPolicy**](UserApi.md#updateuserpolicy) | **POST** /Users/{userId}/Policy | Updates a user policy.


# **authenticateUser**
> AuthenticationResult authenticateUser(userId, pw, password)

Authenticates a user.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final pw = pw_example; // String | The password as plain text.
final password = password_example; // String | The password sha1-hash.

try {
    final result = api_instance.authenticateUser(userId, pw, password);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->authenticateUser: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **pw** | **String**| The password as plain text. | 
 **password** | **String**| The password sha1-hash. | [optional] 

### Return type

[**AuthenticationResult**](AuthenticationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticateUserByName**
> AuthenticationResult authenticateUserByName(authenticateUserByName)

Authenticates a user by name.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();
final authenticateUserByName = AuthenticateUserByName(); // AuthenticateUserByName | The M:Jellyfin.Api.Controllers.UserController.AuthenticateUserByName(Jellyfin.Api.Models.UserDtos.AuthenticateUserByName) request.

try {
    final result = api_instance.authenticateUserByName(authenticateUserByName);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->authenticateUserByName: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticateUserByName** | [**AuthenticateUserByName**](AuthenticateUserByName.md)| The M:Jellyfin.Api.Controllers.UserController.AuthenticateUserByName(Jellyfin.Api.Models.UserDtos.AuthenticateUserByName) request. | 

### Return type

[**AuthenticationResult**](AuthenticationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticateWithQuickConnect**
> AuthenticationResult authenticateWithQuickConnect(quickConnectDto)

Authenticates a user with quick connect.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();
final quickConnectDto = QuickConnectDto(); // QuickConnectDto | The Jellyfin.Api.Models.UserDtos.QuickConnectDto request.

try {
    final result = api_instance.authenticateWithQuickConnect(quickConnectDto);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->authenticateWithQuickConnect: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickConnectDto** | [**QuickConnectDto**](QuickConnectDto.md)| The Jellyfin.Api.Models.UserDtos.QuickConnectDto request. | 

### Return type

[**AuthenticationResult**](AuthenticationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUserByName**
> UserDto createUserByName(createUserByName)

Creates a user.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final createUserByName = CreateUserByName(); // CreateUserByName | The create user by name request body.

try {
    final result = api_instance.createUserByName(createUserByName);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->createUserByName: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserByName** | [**CreateUserByName**](CreateUserByName.md)| The create user by name request body. | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> deleteUser(userId)

Deletes a user.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.

try {
    api_instance.deleteUser(userId);
} catch (e) {
    print('Exception when calling UserApi->deleteUser: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgotPassword**
> ForgotPasswordResult forgotPassword(forgotPasswordDto)

Initiates the forgot password process for a local user.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();
final forgotPasswordDto = ForgotPasswordDto(); // ForgotPasswordDto | The forgot password request containing the entered username.

try {
    final result = api_instance.forgotPassword(forgotPasswordDto);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->forgotPassword: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordDto** | [**ForgotPasswordDto**](ForgotPasswordDto.md)| The forgot password request containing the entered username. | 

### Return type

[**ForgotPasswordResult**](ForgotPasswordResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgotPasswordPin**
> PinRedeemResult forgotPasswordPin(forgotPasswordPinDto)

Redeems a forgot password pin.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();
final forgotPasswordPinDto = ForgotPasswordPinDto(); // ForgotPasswordPinDto | The forgot password pin request containing the entered pin.

try {
    final result = api_instance.forgotPasswordPin(forgotPasswordPinDto);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->forgotPasswordPin: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordPinDto** | [**ForgotPasswordPinDto**](ForgotPasswordPinDto.md)| The forgot password pin request containing the entered pin. | 

### Return type

[**PinRedeemResult**](PinRedeemResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUser**
> UserDto getCurrentUser()

Gets the user based on auth token.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();

try {
    final result = api_instance.getCurrentUser();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->getCurrentUser: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDto**](UserDto.md)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicUsers**
> List<UserDto> getPublicUsers()

Gets a list of publicly visible users for display on a login screen.

### Example
```dart
import 'package:jellydart/api.dart';

final api_instance = UserApi();

try {
    final result = api_instance.getPublicUsers();
    print(result);
} catch (e) {
    print('Exception when calling UserApi->getPublicUsers: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<UserDto>**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserById**
> UserDto getUserById(userId)

Gets a user by Id.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.

try {
    final result = api_instance.getUserById(userId);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->getUserById: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsers**
> List<UserDto> getUsers(isHidden, isDisabled)

Gets a list of users.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final isHidden = true; // bool | Optional filter by IsHidden=true or false.
final isDisabled = true; // bool | Optional filter by IsDisabled=true or false.

try {
    final result = api_instance.getUsers(isHidden, isDisabled);
    print(result);
} catch (e) {
    print('Exception when calling UserApi->getUsers: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isHidden** | **bool**| Optional filter by IsHidden=true or false. | [optional] 
 **isDisabled** | **bool**| Optional filter by IsDisabled=true or false. | [optional] 

### Return type

[**List<UserDto>**](UserDto.md)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> updateUser(userId, userDto)

Updates a user.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final userDto = UserDto(); // UserDto | The updated user model.

try {
    api_instance.updateUser(userId, userDto);
} catch (e) {
    print('Exception when calling UserApi->updateUser: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **userDto** | [**UserDto**](UserDto.md)| The updated user model. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserConfiguration**
> updateUserConfiguration(userId, userConfiguration)

Updates a user configuration.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final userConfiguration = UserConfiguration(); // UserConfiguration | The new user configuration.

try {
    api_instance.updateUserConfiguration(userId, userConfiguration);
} catch (e) {
    print('Exception when calling UserApi->updateUserConfiguration: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **userConfiguration** | [**UserConfiguration**](UserConfiguration.md)| The new user configuration. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserEasyPassword**
> updateUserEasyPassword(userId, updateUserEasyPassword)

Updates a user's easy password.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final updateUserEasyPassword = UpdateUserEasyPassword(); // UpdateUserEasyPassword | The M:Jellyfin.Api.Controllers.UserController.UpdateUserEasyPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserEasyPassword) request.

try {
    api_instance.updateUserEasyPassword(userId, updateUserEasyPassword);
} catch (e) {
    print('Exception when calling UserApi->updateUserEasyPassword: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **updateUserEasyPassword** | [**UpdateUserEasyPassword**](UpdateUserEasyPassword.md)| The M:Jellyfin.Api.Controllers.UserController.UpdateUserEasyPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserEasyPassword) request. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserPassword**
> updateUserPassword(userId, updateUserPassword)

Updates a user's password.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final updateUserPassword = UpdateUserPassword(); // UpdateUserPassword | The M:Jellyfin.Api.Controllers.UserController.UpdateUserPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserPassword) request.

try {
    api_instance.updateUserPassword(userId, updateUserPassword);
} catch (e) {
    print('Exception when calling UserApi->updateUserPassword: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **updateUserPassword** | [**UpdateUserPassword**](UpdateUserPassword.md)| The M:Jellyfin.Api.Controllers.UserController.UpdateUserPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserPassword) request. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserPolicy**
> updateUserPolicy(userId, userPolicy)

Updates a user policy.

### Example
```dart
import 'package:jellydart/api.dart';
// TODO Configure API key authorization: CustomAuthentication
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKey = 'YOUR_API_KEY';
// uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//defaultApiClient.getAuthentication<ApiKeyAuth>('CustomAuthentication').apiKeyPrefix = 'Bearer';

final api_instance = UserApi();
final userId = 38400000-8cf0-11bd-b23e-10b96e4ef00d; // String | The user id.
final userPolicy = UserPolicy(); // UserPolicy | The new user policy.

try {
    api_instance.updateUserPolicy(userId, userPolicy);
} catch (e) {
    print('Exception when calling UserApi->updateUserPolicy: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id. | 
 **userPolicy** | [**UserPolicy**](UserPolicy.md)| The new user policy. | 

### Return type

void (empty response body)

### Authorization

[CustomAuthentication](../README.md#CustomAuthentication)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json, application/json; profile=CamelCase, application/json; profile=PascalCase

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

