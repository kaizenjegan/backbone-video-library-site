/*global define*/
define([
	'jquery',
	'backbone',
	'collections/flixDb',
	'views/video'
], function ($, Backbone, FlixDb, VideoView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",
	        "upload": "renderUploadForm",
	        "search/:query": "searchVideos"
	    },

	    renderVideoView: function(id){
	    	var video = FlixDb.get(id).toJSON();

			new VideoView({model: video});
	    },

	});

	return AppRouter;
});
