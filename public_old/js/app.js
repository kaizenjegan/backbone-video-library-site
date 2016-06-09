/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        
        text: '../bower_components/requirejs-text/text'
    }
});



require([
    'collection/user',
    // 'view/header',
    // 'view/list',
    // 'view/not_logged_in',
    'routers/router'
], function (Users, HeaderView, ListView, NotLoggedInView, Workspace) {
    /*jshint nonew:false*/
    // Initialize routing and start Backbone.history()
    // new Workspace();
    // Backbone.history.start();

    // // Initialize the application view
    // new AppView();
    new Workspace();
    Backbone.history.start();

    Users.isLoggedIn();

    Users.on('logged_in', function(){
        $('#header').show();
        console.log('logged in');
        new HeaderView();

        new ListView({
            model: app.Videos
        });
    });


    Users.on('not_logged_in', function()
    {
        console.log('not logged in');
        $('#header').hide();
        new NotLoggedInView();
    });
});



// (function() {
   
//     //check if user is logged in
//     app.Users.isLoggedIn();


//     app.Users.on('logged_in', function(){
//          $('#header').show();
//             new app.HeaderView();

//             new app.ListView({
//                 model: app.Videos
//             });
//     });


//     app.Users.on('not_logged_in', function()
//     {
//         $('#header').hide();
//         new app.NotLoggedInView();
//     });

// })();