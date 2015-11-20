var app = app || {};


(function()
 {

 	// app.Videos.fetch({reset: true});
 	app.Videos.fetch();


 	
 	new app.ListView({model: app.Videos});
 })();
