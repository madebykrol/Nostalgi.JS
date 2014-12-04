/**
 *
 */

var NOSTALGI = NOSTALGI || {};

NOSTALGI.Net = {};

NOSTALGI.Net.Server = function () {
	
	var replicateFunction = function(func) {
		
	}
	
	var replicateActor = function(actor) {
		actor.replicate();
	}
	
	this.replicate = function(actor) {
		if(actor instanceof NOSTALGI.Actor) {
			replicateActor(actor);
		}
	};
};

NOSTALGI.Net.Client = function () {
	
};