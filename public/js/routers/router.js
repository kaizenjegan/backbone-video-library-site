/*global define*/
define([
	'jquery',
	'backbone',
	'collections/flixDb',
	'views/showVideo',
	'views/addTorrent',
	'views/addVideo',
	'views/list',
], function ($, Backbone, FlixDb, VideoView, AddTorrentView, AddVideoView, ListView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	    	'home': 'home',
	        "view/:id": "renderVideoView",	  
	        'addTorrent': "addTorrent",
	        'addVideo': "addVideo"
	    },
	    home: function(){
	    	new ListView({
                model: FlixDb
            });
	    },
	    renderVideoView: function(id){
	    	var video = FlixDb.get(id).toJSON();

			new VideoView({model: video});
	    },
	    addTorrent: function(){
	    	new AddVideoView();
	    },
	    addVideo: function(){
	    	new AddVideoView();
	    	
	    }
	});

	return AppRouter;
});
