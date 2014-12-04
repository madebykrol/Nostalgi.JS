/**
 *
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.GL = {};

/**
 * Utiliti class for loading and 
 */
NOSTALGI.GL.ShaderUtil = function() {

	// Compiled shader cache.
	var shaders = [];

	// Shader type globals
	this.SHADER_TYPE_FRAGMENT = "x-shader/x-fragment";
	this.SHADER_TYPE.VERTEX = "x-shader/x-vertex";

	this.loadShaderProgram = function(gl, vertex, fragment) {

		var vertexShader = getShader(gl, vertex, self.SHADER_TYPE_VERTEX);
		var fragmentShader = getShader(gl, fragment, self.SHADER_TYPE_FRAGMENT);

		var p = gl.createProgram();
		gl.attachShader(p, vertexShader);
		gl.attachShader(p, fragmentShader);

		gl.linkProgram(p);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			new NOSTALGI.Exception("Could not link shaders");
		}

		return p;
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
		if (shaderType == self.SHADER_TYPE_VERTEX) {
			shader = gl.createShader(gl.VERTEX_SHADER);
		} else if (shaderType == self.SHADER_TYPE_FRAGMENT) {
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
NOSTALGI.GL.ShaderUtil.prototype = Object.create(NOSTALGI.Object.prototype);

NOSTALGI.GL.Renderer = function(viewport) {
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
NOSTALGI.GL.Renderer.prototype = Object.create(NOSTALGI.Object.prototype);