/**
 * Nostagli Class.
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.Object = function() {
	// self reference as "this" will go out of scope.
	self = this;
};

/**
 * Actors are objects that can be placed and spawned in a level.
 */
NOSTALGI.Actor = function() {
		NOSTALGI.Object.call(this);
		
		// Replicate this actor to other clients over network.
		this.replicate = function() {};
};
NOSTALGI.Actor.prototype = Object.create(NOSTALGI.Object.prototype);

/**
 * Pawns are actors that can be controlled and moved by players or AI.
 * They have physical representation in the world, with collision detection etc.
 */
NOSTALGI.Pawn = function () {
		NOSTALGI.Actor.call(this)
};
NOSTALGI.Pawn.prototype = Object.create(NOSTALGI.Actor.prototype);


NOSTALGI.Scene = function () {
	var graph = {};
	
}

/**
 * Exceptions
 */
NOSTALGI.Exception = function(message) {
    this.name = "Exception";
    this.message = message;
    this.stack = (new Error()).stack;
}; NOSTALGI.Exception.prototype = new Error();

NOSTALGI.OldBrowserException = function() {
    NOSTALGI.Exception.call(this, "Your browser is to old! It might be called nostalgi, but you are TOO old!");
    this.name = "OldBrowserException";
}

console.log(new NOSTALGI.Actor());
console.log(new NOSTALGI.Pawn());
