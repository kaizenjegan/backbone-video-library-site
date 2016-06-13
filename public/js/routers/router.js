/*global define*/
define([
	'jquery',
	'backbone',
	'collections/flixDb',
	'views/video',
	'views/addTorrent'
], function ($, Backbone, FlixDb, VideoView, AddTorrent) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",	  
	        'AddTorrent': "addTorrent"
	    },
	    renderVideoView: function(id){
	    	var video = FlixDb.get(id).toJSON();

			new VideoView({model: video});
	    },
	    addTorrent: function(){
	    	new AddTorrent();
	    }
	});

	return AppRouter;
});
