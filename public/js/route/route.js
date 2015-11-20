var app = app || {};

(function()
{
	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",
	        "upload": "renderUploadForm",
	        "search/:query": "searchVideos"
	    }
	});
	
	// Initiate the router
	app.router = new AppRouter();

	app.router.on('route:renderVideoView', function(id) 
	{	
		new app.VideoView({model: app.Videos, videoId: id});
	});

	app.router.on('route:renderUploadForm', function()
	{	
		new app.UploadView();
	});

	app.router.on("route:searchVideos", function(query)
	{
		// app.get
	});
	Backbone.history.start();
})();