/**
 *
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.GL = {};

/**
 * Utiliti class for loading and 
 */
NOSTALGI.GL.ShaderUtil = function () {
	
	NOSTALGI.Object.call(this);
	
	// Compiled shader cache.
	var shaders = [];
	
	// Shader type globals
	this.SHADER_TYPE_FRAGMENT = "x-shader/x-fragment";
	this.SHADER_TYPE.VERTEX = "x-shader/x-vertex";
	
	this.loadShaderProgram = function(gl, vertex, fragment) {
		
		var vertexShader = null;
		var fragmentShader = null;
		
		if((vertextShader = shaders[vertex]) == undefined) {
			vertexShader = getShader(gl, vertex);
		}
		
		if((fragmentShader = shaders[fragment]) == undefined) {
			fragmentShader = getShader(gl, fragment);
		}
	}
	
	function getShader(gl, shader) {
		
	}
	
	
};
NOSTALGI.GL.ShaderUtil.prototype = Object.create(NOSTALGI.Object.prototype);

NOSTALGI.GL.Renderer = function (canvas) {
	this.canvas = canvas;
	NOSTALGI.Object.call(this);
	
	
	this.renderScene = function (scene) {
		if (!scene instanceof NOSTALGI.scene) {
			
		}
	}
};
NOSTALGI.GL.Renderer.prototype = Object.create(NOSTALGI.Object.prototype);