/**
 * Nostagli Class.
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.Object = function() {
	// self reference as "this" will go out of scope.
	self = this;
	this.allowToTick = false;
};

/**
 * Actors are objects that can be placed and spawned in a level.
 */
NOSTALGI.Actor = function() {
	NOSTALGI.Actor.prototype = Object.create(NOSTALGI.Object.prototype);
	NOSTALGI.Object.call(this);
	
	var controller = {};

	// Replicate this actor to other clients over network.
	this.replicate = function() {
		
	};
	
	this.setController = function(ctrlr) {
		self.controller = ctrlr;
	}
};


/**
 * Pawns are actors that can be controlled and moved by players or AI.
 * They have physical representation in the world, with collision detection etc.
 */
NOSTALGI.Pawn = function() {
	NOSTALGI.Pawn.prototype = Object.create(NOSTALGI.Actor.prototype);
	NOSTALGI.Actor.call(this);
};


NOSTALGI.Scene = function() {

	var graph = {};
	
	this.initScene = function() {
		
	};
	
	this.spawnActor = function (actor, location) {
		
	};
	
	this.loadLevel = function (level) {
		
	};

	NOSTALGI.Object.call(this);
}

/**
 * Exceptions
 */
NOSTALGI.Exception = function(message) {
	NOSTALGI.Exception.prototype = new Error();
	this.name = "Exception";
	this.message = message;
	this.stack = (new Error()).stack;
};


NOSTALGI.OldBrowserException = function() {
	NOSTALGI.Exception
	.call(this,
			"Your browser is to old! It might be called nostalgi, but you are TOO old!");
	this.name = "OldBrowserException";
};



NOSTALGI.Controller = function() {
	NOSTALGI.Controller.prototype = Object.create(NOSTALGI.Object.prototype);
	var activeActor = null;

	this.configInput = this.configInput || function () {
		console.log("Base class");
		return [];
	}
	
	this.configMouseInput = function () {
		
	}
	
	this.setActiveActor = function(actor) {
		activeActor = actor;
	}
	
	this.getActiveActor = function() {
		return activeActor;
	}
	
	this.initController = function() {
		events = this.configInput();
		for (var inp in events) {
			document.addEventListener("keypress", function(e) {
				events[imp].callback();
			});
		}
	}
	
	
	NOSTALGI.Object.call(this);
};
