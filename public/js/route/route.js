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
		var video = app.Videos.get(id).toJSON();

		new app.VideoView({model: video});
	});

	app.router.on('route:renderUploadForm', function()
	{	
		new app.UploadView();
	});

	app.router.on("route:searchVideos", function(query){

	});

	app.router.on("route:home", function(query)
	{
		// new app.ListView({model: app.Videos});
	});
	Backbone.history.start();
})();