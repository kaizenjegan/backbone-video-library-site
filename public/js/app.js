var app = app || {};


(function() {
   
    //check if user is logged in
    app.Users.isLoggedIn();


    app.Users.on('logged_in', function(){
         $('#header').show();
            new app.HeaderView();

            new app.ListView({
                model: app.Videos
            });
    });


    app.Users.on('not_logged_in', function()
    {
        $('#header').hide();
        new app.NotLoggedInView();
    });

})();