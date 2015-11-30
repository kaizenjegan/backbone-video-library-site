var app = app || {};


(function() {
    new app.HeaderView();
    
    new app.ListView({
        model: app.Videos
    });

    app.Users.fetch({
    	success: function(a,b,c)
    	{
    		console.log('success');
    	},
        error: function(a, b, c) {
            new app.LoginView();
        }
    });


})();