var EXAMPLE = EXAMPLE || {};

EXAMPLE.Controller = {};

EXAMPLE.Controller.FirstPersonController = function() {
	EXAMPLE.Controller.FirstPersonController.prototype = Object.create(NOSTALGI.Controller.prototype);
	
	var keyboardInputs = this.configKeypressInput;
	
	this.moveForward = function () {
		
	}

	this.moveBackwards = function () {
		
	}

	this.moveLeft = function () {
		
	}	

	this.moveRight = function () {
		
	}
	
	this.moveTo = function (eventX, eventY) {
		
		// First check if we hit anything in the UI.
		
		
		// Then fire a ray into the scene, figure out where on the ground we need to move the player.
		
	}

	this.configInput = function () {
		var inputs = [];
		console.log("Sub class");
		inputs.push(new NOSTALGI.IO.KeyboardListener('W', this.moveForward));
		inputs.push(new NOSTALGI.IO.KeyboardListener('A', this.moveLeft));
		inputs.push(new NOSTALGI.IO.KeyboardListener('S', this.moveBack));
		inputs.push(new NOSTALGI.IO.KeyboardListener('D', this.moveRight));
		
		
		inputs.push(new NOSTALGI.IO.TouchListener("Tap", this.moveTo));
		inputs.push(new NOSTALGI.IO.TouchListener("Swipe", this.swipeHandler));
		return inputs;
	};
	
	NOSTALGI.Controller.call(this);
};