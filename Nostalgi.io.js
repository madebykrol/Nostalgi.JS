/**
 *
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
 *  	type: '',
 *  	data: data (string, array or plain jsobject.,
 *  	async: true|false,
 *  	onSuccess: callback,
 *  	onError: callback,
 *  	dataType: json | jsonp | xml | html | text,
 *  	timeout: default(5000 msec), for shader purposes set this timeout to sub 1k. We want to load these fast or not at all,
 *  }
 */
NOSTALGI.IO.Ajax = function (url, conf) {
	
	console.log(conf);
	
	function x() {
		if (typeof XMLHttpRequest !== 'undefined') {
	        return new XMLHttpRequest();  
	    } else {
	    	throw new NOSTALGI.OldBrowserException();
	    }
	}
	
	function send (url, type, data, async, sCallback, eCallback) {
		var xhr = x();
		x.open();
	}
};

NOSTALGI.IO.File = function (async) {
	NOSTALGI.Object.call(this);
	
	this.async = async;
	var fileCache = [];
	
	this.read = function(filePath) {
		var content = null;
		if((content = fileCache[filePath]) == undefined) {
			
		}
	}
};
NOSTALGI.IO.File.prototype = Object.create(NOSTALGI.Object.prototype);