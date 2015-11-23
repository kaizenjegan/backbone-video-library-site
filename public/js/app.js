var app = app || {};


(function() {
    new app.HeaderView();
    new app.ListView({
        model: app.Videos
    });
    app.Users.fetch({
        error: function(a, b, c) {
            new app.LoginView();
        }
    });


})();