/*global define*/
define([
	'jquery',
	'backbone',
	'flixDb',
	''
], function ($, Backbone) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",
	        "upload": "renderUploadForm",
	        "search/:query": "searchVideos"
	    },

	    renderVideoView: function(id){

	    },

	});


	var router = new AppRouter();

	router.on('route:renderVideoView', function(id) 
	{	
		// var video = app.Videos.get(id).toJSON();

		// new app.VideoView({model: video});
	});

	return AppRouter;
});
