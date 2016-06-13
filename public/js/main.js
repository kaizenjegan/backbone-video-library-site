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
		handlebars: {
			exports: 'Handlebars'
		},
		// handlebars.runtime
		"handlebars.runtime": {
			exports: "handlebars.runtime"
		},
		compiled_templates: {
			deps: [
				'Handlebars',
				'handlebars.runtime'
			],
			exports: 'compiled_templates'
		}

	},
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		Handlebars: '../bower_components/handlebars/handlebars',
		"handlebars.runtime":  '../bower_components/handlebars/handlebars.runtime',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		// text: '../node_modules/requirejs-text/text',
		hbs: 'lib/require-handlebars-plugin/hbs',
		compiled_templates: 'templates/precompiled',
		browserify: '../../node_modules/browserify',
		webtorrent: '../../node_modules/webtorrent'
	},
	hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }	
});

require([
	'backbone',
	'routers/router',
	'collections/user',
	'views/list',
	'views/not-logged-in',
	'views/header',
	'collections/flixDb',
	'views/addTorrent'
], function (Backbone, Workspace, Users, ListView, SignUpView, HeaderView, FlixDb, AddTorrent) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	// new AppView();

	Users.isLoggedIn();

    Users.on('logged_in', function(){
         $('#header').show();
         console.log('logged in');
            new HeaderView();

            // new ListView({
            //     model: FlixDb
            // });

            new AddTorrent();
    });


    Users.on('not_logged_in', function()
    {
        // console.log('not logged in');
        $('#header').hide();
        new SignUpView();
    });
});
