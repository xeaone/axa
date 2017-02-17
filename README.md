# Axa
Axa a low level Ajax/Xhr library.

## Overview
- Install `npm install axa --save`
- Browser/CommonJs/Node.js `dist/axa.js`
- ES2015/ES6/ESM `src/axa.b.m.js`

## API

### Axa.request(options)
Performance an ajaxa request and is highly configurable.

##### Options
- `action: String` Resource action url/uri. **Required**

- `method: String` Valid methods get, post, put, delete. **Default: GET**
- `success: Function`
- `error: Function`

- `data: Object` If method is `GET` than data is serialized and concatenated to the `action/url` as parameters.

- `requestType: String` Converts the request data before sending.
	- `script` 'text/javascript, application/javascript, application/x-javascript'
	- `json` 'application/json' stringifies `options.data`
	- `xml` 'application/xml, text/xml'
	- `html` 'text/html'
	- `text` 'text/plain'
	- **Default** 'application/x-www-form-urlencoded' serializes `options.data`

- `responseType: String` Converts the response data after sending a request.
	- `script` 'text/javascript, application/javascript, application/x-javascript'
	- `json` 'application/json'
	- `xml` 'application/xml, text/xml'
	- `html` 'text/html'
	- `text` 'text/plain'

- `contentType: String` Short hand to set the Content-Type Headers. (For request)
- `accept: String` Short hand to set the Accept Headers. (For response)
- `mimeType: String` Overwrites return type.

- `username: String`
- `password: String`
- `withCredentials: Boolean`
- `headers: Object` A low level headers object. This will map directly to the XMLHttpRequest header. This Will overwrite any previously defined options.

##### Example
```JavaScript
Axa.request({
	method: 'get',
	action: '/examples/index.html',
	data: { name: 'stuff' },
	success: function (xhr) {
		console.log(xhr);
	},
	error: function (xhr) {
		console.log(xhr);
	}
});
```


### Axa.serialize(data)

##### Parameter
- `Object` Single level deep key value pare

##### Example
```JavaScript
var stringData = Axa.serialize(data);
```


### Axa.mime

##### Return
- `Object` a object containing the mimes.

##### Example
```JavaScript
var mime = Axa.mime;
```


## License
Licensed Under MPL 2.0
Copyright 2016 [Alexander Elias](https://github.com/AlexanderElias/)
