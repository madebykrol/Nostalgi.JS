/**
 * Default nostalgi namespace.
 */
var NOSTALGI = NOSTALGI || {};

NOSTALGI.IO = {};

/**
 * A simple ajax to use if jQuery is not precent.
 * Parameters:
 * 	 - url
 *   - settings
 *  
 *  Settings is passed as a plain javascript object.
 *  {
 *  	method: get|post|put|delete|update,
 *  	data: data (string, array or plain jsobject.,
 *  	async: true|false, true for loading shaders
 *  	success: callback,
 *  	error: callback,
 *  	dataType: json | jsonp | xml | html | text,
 *  	timeout: default(5000 msec), for shader purposes set this timeout to sub 1k. We want to load these fast or not at all,
 *  	onTimeout: callback
 *  }
 */
NOSTALGI.IO.Ajax = function (url, conf) {
	
	function x() {
		if (typeof XMLHttpRequest !== 'undefined') {
	        return new XMLHttpRequest();  
	    } else {
	    	throw new NOSTALGI.OldBrowserException();
	    }
	}
	
	function send (url, conf) {
		var xhr = x();
		var toCallback = conf.onTimeout;
		var timeout = conf.timeout;
		
		// handle timeout.
		if(conf.async) {
			xhr.timeout = parseInt(conf.timeout);
			if(conf.onTimeout != undefined) {
				xhr.ontimeout = conf.onTimeout;
			}
		}
		// open http request.
		xhr.open(conf.method, url, conf.async);
		xhr.onreadystatechange = function () {
			// handle state changes.
			if(xhr.readyState == 4 && xhr.status == 200) {
				if(conf.success != undefined) {
					conf.success(xhr.responseText);
				}
			} else {
				if(conf.error != undefined) {
					conf.error(xhr.responseText, xhr.status);
				}
			}
		}
		
		// Make request.
		xhr.send(conf.data);
	}
	
	// Perform our ajax request.
	var query = [];
	var data = null;
	var path = url;
	var confCopy = Object.create(conf);
	
	if(typeof(data) !== 'string') {
		
	    for (var key in conf.data) {
	        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	    }
	    if(conf.method == 'post') {
	    	data = query.join('&');
	    } else {
	    	path += '?' + query.join('&');
	    }
	}
	
	// Set some default data.
	confCopy.data = data;
	if(confCopy.method == undefined || confCopy.method == null) {
		confCopy.method = 'get';
	}
	
	if(confCopy.timeout == undefined || confCopy.timeout == null) {
		confCopy.timeout = 5000;
	}
	
	send(path, confCopy);
};
/**
 * Create a File Stream over HTTP for read.
 */
NOSTALGI.IO.File = function (async, cache) {
	
	this.async = async;
	this.fileContent = null;
	
	
	this.read = function(filePath, cache) {
		NOSTALGI.IO.Ajax(filePath, {
			async: self.async,
			success: function(response) {
				self.fileContent = response;
			}, 
			error: function (response, status) {
				
			},
			onTimeout: function(timeout, retries) {
				
			}
		});
		return self.fileContent;
	}
	
	NOSTALGI.Object.call(this);
};
NOSTALGI.IO.File.prototype = Object.create(NOSTALGI.Object.prototype);