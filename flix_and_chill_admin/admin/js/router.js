/*global define*/
define([
	'jquery',
	'backbone',
	'utils/ViewManager'
], function ($, Backbone, vm) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	    	'home': 'home',
	        "view/:id": 'renderVideoView',	  
	        'addVideo': 'addVideo',
	        'users': 'users',
			"*action": "home"
	    },
	    home: function(){
      		// ViewManager.showView(ListView, {model: FlixDb});
      		console.log("home");
	    },
	    renderVideoView: function(id){
	    	
	    },
	    users: function() {
	    	
	    },
	    addVideo: function(){
	    	// ViewManager.showView(AddVideoView);
	    	
	    }
	});

	return AppRouter;
});
