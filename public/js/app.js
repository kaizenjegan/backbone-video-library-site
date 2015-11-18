var app = app || {};


(function()
 {
 	app.Videos.fetch({reset: true});
 	new app.ListView({model: app.Videos});
 })();
