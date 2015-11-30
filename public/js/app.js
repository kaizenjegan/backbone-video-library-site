var app = app || {};


(function() {


    app.Users.fetch({
        success: function(model) {
            // console.log('success');
            $('#header').show();
            new app.HeaderView();

            new app.ListView({
                model: app.Videos
            });
        },
        error: function(a, b, c) {
            new app.LoginView();
        }
    });


})();