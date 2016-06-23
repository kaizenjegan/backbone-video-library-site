/*global define*/
define([
	'jquery',
	'backbone',
	'collections/flixDb',
	'views/showVideo',
	'views/addVideo',
	'views/list',
	'utils/ViewManager'
], function ($, Backbone, FlixDb, VideoView, AddVideoView, ListView, ViewManager) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	    	'home': 'home',
	        "view/:id": "renderVideoView",	  
	        'addVideo': "addVideo"
	    },
	    home: function(){
      		ViewManager.showView(ListView, {model: FlixDb});
	    },
	    renderVideoView: function(id){
	    	var video = FlixDb.get(id).toJSON();

			ViewManager.showView(VideoView, {model: video});
	    },
	    addVideo: function(){
	    	ViewManager.showView(AddVideoView);
	    	
	    }
	});

	return AppRouter;
});
