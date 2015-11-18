var app = app || {};

(function()
{
	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "view/:id": "renderVideoView"	   
	    }
	});
	
	// Initiate the router
	app.router = new AppRouter();

	app.router.on('route:renderVideoView', function(id) 
	{	
		new app.VideoView({model: app.Videos, videoId: id});
	});

	Backbone.history.start();
})();