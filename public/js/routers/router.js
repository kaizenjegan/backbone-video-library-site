/*global define*/
define([
	'jquery',
	'backbone',
	'collections/flixDb',
	'views/showVideo',
	'views/addVideo',
	'views/list',
	'utils/ViewManager',
	'common'
], function ($, Backbone, FlixDb, VideoView, AddVideoView, ListView, ViewManager, common) {
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
	    	var video = FlixDb.get(id);

	    	function showVid(){
    			video = FlixDb.get(id);
    			ViewManager.showView(VideoView, {model: video});	
    		}

	    	if(video) {
	    		ViewManager.showView(VideoView, {model: video});
	    	}else{
	    		this.listenToOnce(FlixDb, "add", showVid);
	    		FlixDb.fetch();
	    	}

			
	    },
	    addVideo: function(){
	    	ViewManager.showView(AddVideoView);
	    	
	    }
	});

	return AppRouter;
});
