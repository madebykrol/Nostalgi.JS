/**
 *
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.GL = {};
NOSTALGI.GL.SHADER_TYPE_FRAGMENT 	= "x-shader/x-fragment";
NOSTALGI.GL.SHADER_TYPE_VERTEX 		= "x-shader/x-vertex";


/**
 * ShaderProgram for loading and 
 */
NOSTALGI.GL.ShaderProgram = function(gl) {
	NOSTALGI.GL.ShaderProgram.prototype = Object.create(NOSTALGI.Object.prototype);

	// Compiled shader cache.
	var shaders = [];
	var gl = gl;
	var pID = null;

	this.createShaderProgram = function(vertex, fragment) {

		var vertexShader = getShader(gl, vertex, NOSTALGI.GL.SHADER_TYPE_VERTEX);
		var fragmentShader = getShader(gl, fragment, NOSTALGI.GL.SHADER_TYPE_FRAGMENT);

		pID = gl.createProgram();
		gl.attachShader(pID, vertexShader);
		gl.attachShader(pID, fragmentShader);
	}
	
	this.getProgramID = function () {
		return pID;
	}
	
	this.linkProgram = function () {
		gl.linkProgram(pID);

		if (!gl.getProgramParameter(pID, gl.LINK_STATUS)) {
			new NOSTALGI.Exception("Could not link shaders");
		}
	}

	function getShader(gl, shaderFile, type) {
		var shaderObj;

		// Read shader object from memory, so we don't need to make a file read.
		if ((shaderObj = self.shaders[shaderFile]) == undefined) {
			var f = new NOSTALGI.IO.File(false);
			shaderObj = {
					source : '',
					type : type,
			};
			shaderObj.source = f.read(shaderFile);
			self.shaders[shaderFile] = shaderObj;
		}

		var shader;
		if (shaderType == NOSTALGI.GL.SHADER_TYPE_VERTEX) {
			shader = gl.createShader(gl.VERTEX_SHADER);
		} else if (shaderType == NOSTALGI.GL.SHADER_TYPE_FRAGMENT) {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		} else {
			throw new NOSTALGI.Exception("Invalid shader type exception");
		}

		gl.shaderSource(shader, shaderObj.source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new NOSTALGI.Exception(gl.getShaderInfoLog(shader));
		}

		return shader;
	}

	NOSTALGI.Object.call(this);
};


NOSTALGI.GL.Renderer = function(viewport) {
	NOSTALGI.GL.Renderer.prototype = Object.create(NOSTALGI.Object.prototype);
	var currentViewport = viewport;

	var gl;
	var glCanvas;
	var initiated = false;

	this.init = function() {

		glCanvas = document.getElementById(currentViewport);
		try {
			gl = glCanvas.getContext("experimental-webgl");
			gl.viewportWidth = glCanvas.width;
			gl.viewportHeight = glCanvas.height;
		} catch (e) {
			console.log(e);
		}
		if (!gl) {
			new NOSTALGI.Exception("Could not load GL, old browser mayhaps?");
		}
		// Need to fix order of operations here 
		initiated = true;
	}
	this.setCurrentViewport = function(viewport) {
		currentViewport = viewport;
	}

	this.getCurrentViewport = function() {
		return currentViewport;
	}

	this.getGl = function() {
		return gl;
	}

	this.renderScene = function(scene) {
		if (!scene instanceof NOSTALGI.scene) {

		}
	}

	NOSTALGI.Object.call(this);
};
