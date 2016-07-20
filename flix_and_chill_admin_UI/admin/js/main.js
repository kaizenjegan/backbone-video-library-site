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
		},
		bootstrap: {
			deps: [
				'jquery'
			],
			exports: 'bootstrap'
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
		compiled_templates: 'templates/compiled',
		browserify: '../../node_modules/browserify',
		webtorrent: '../bower_components/webtorrent-io/webtorrent.min',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
	},
	hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }	
});

require([
	'backbone',
	'router',
	'utils/ViewManager',
	'collections/user',
	'views/login',
	'views/navigation',
	'views/userList'
], function (Backbone, Workspace, vm, Users, loginView, NavigationBarView, userList) {
	/*jshint nonew:false*/

	Backbone.View.prototype.initialize = function(){
		// this.stopListening();
	}
	Backbone.View.prototype.close = function(){
		// this.unbind(); //not working		
	}

	vm.router = new Workspace();
	Backbone.history.start();

	Users.isLoggedIn();

    Users.on('logged_in', function(){
        $('#header').show();
         
        new NavigationBarView();

        vm.showView(userList);

        console.log('not logged in');
    });


    Users.on('not_logged_in', function()
    {        
        // $('#header').hide();
        vm.showView(loginView);
        
        console.log('not logged in');
    });
});
