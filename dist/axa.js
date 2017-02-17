/*
	@preserve
	title: axa
	version: 1.0.5
	author: Alexander Elias
	descript: Axa a low level Ajax Xhr library.
*/
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Axa',b):a.Axa=b()})(this,function(){'use strict';function a(e){var f='';for(var g in e)f=0<f.length?f+'&':f,f=f+encodeURIComponent(g)+'='+encodeURIComponent(e[g]);return f}var c={script:'text/javascript, application/javascript, application/x-javascript',json:'application/json, text/javascript',xml:'application/xml, text/xml',html:'text/html',text:'text/plain',urlencoded:'application/x-www-form-urlencoded'};return{mime:c,request:function(e){if(!e)throw new Error('Axa: requires options');if(!e.action)throw new Error('Axa: requires options.action');if(e.method||(e.method='GET'),e.headers||(e.headers={}),e.data)if('GET'===e.method)e.action=e.action+'?'+a(e.data),e.data=null;else{switch(e.requestType=e.requestType.toLowerCase(),e.responseType=e.responseType.toLowerCase(),e.requestType){case'script':e.contentType=c.script;break;case'json':e.contentType=c.json;break;case'xml':e.contentType=c.xm;break;case'html':e.contentType=c.html;break;case'text':e.contentType=c.text;break;default:e.contentType=c.urlencoded;}switch(e.responseType){case'script':e.accept=c.script;break;case'json':e.accept=c.json;break;case'xml':e.accept=c.xml;break;case'html':e.accept=c.html;break;case'text':e.accept=c.text;}e.contentType===c.json&&(e.data=JSON.stringify(e.data)),e.contentType===c.urlencoded&&(e.data=a(e.data))}var f=new XMLHttpRequest;if(f.open(e.method.toUpperCase(),e.action,!0,e.username,e.password),e.mimeType&&f.overrideMimeType(e.mimeType),e.withCredentials&&(f.withCredentials=e.withCredentials),e.accept&&(e.headers.Accept=e.accept),e.contentType&&(e.headers['Content-Type']=e.contentType),e.headers)for(var g in e.headers)f.setRequestHeader(g,e.headers[g]);f.onreadystatechange=function(){if(4===f.readyState)return 200<=f.status&&400>f.status?e.success(f):e.error(f)},f.send(e.data)},serialize:a}});