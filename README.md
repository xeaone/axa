# Axa
Axa a low level Ajax/Xhr library.

## Overview
- Install `npm install axa --save`
- Browser/CommonJs/Node.js `dist/axa.js`
- ES2015/ES6/ESM `src/axa.b.m.js`

## API

### Astatine.ajax(options)
Ajax is a lower level utility function that allows for more control but less features than the submit method.

##### Options
- `action: String` Resource action url. **Required**
- `method: String` Valid methods get, post, put, delete. **Required**

- `success: Function` **Required**
- `error: Function` **Required**

- `data: Object` If method is `GET` than data is concatenated to the `action/url` as parameters.

- `requestType: String` Converts the request data before sending.
	- `script` 'text/javascript, application/javascript, application/x-javascript'
	- `json` 'application/json' stringify `options.data`
	- `xml` 'application/xml, text/xml'
	- `html` 'text/html'
	- `text` 'text/plain'
	- DEFAULT 'application/x-www-form-urlencoded' serialized `options.data`

- `responseType: String` Converts the response data after sending.
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
- `headers: Object`    A low level headers object it will map directly to the XHR header. The Will overwrite any above options.

##### Example
```JavaScript
Astatine.ajax({
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

### Astatine.serialize(data)

##### Parameter
- `Object` Single level deep key value pare

##### Example
```JavaScript
var stringData = Astatine.serialize(data);
```


## License
Licensed Under MPL 2.0
Copyright 2016 [Alexander Elias](https://github.com/AlexanderElias/)
