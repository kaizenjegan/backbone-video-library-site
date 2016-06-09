define([
	'jquery',
	'backbone',
	
], function ($, Backbone) {

	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",
	        "upload": "renderUploadForm",
	        "search/:query": "searchVideos"
	    }
	});
	
	// Initiate the router
	var router = new AppRouter();

	router.on('route:renderVideoView', function(id) 
	{	
		// var video = app.Videos.get(id).toJSON();

		// new app.VideoView({model: video});
	});

	router.on('route:renderUploadForm', function()
	{	
		// new app.UploadView();
	});

	router.on("route:searchVideos", function(query){

	});

	router.on("route:home", function(query)
	{
		// new app.ListView({model: app.Videos});
	});
	
	return router;
});