var app = app || {};


(function()
 {
 	app.Videos.fetch({reset: true});
 	new app.VideoView({model: app.Videos});
 })();
