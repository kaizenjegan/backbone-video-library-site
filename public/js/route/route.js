var app = app || {};

(function()
{
	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView",
	        "upload": "renderUploadForm"
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
	Backbone.history.start();
})();