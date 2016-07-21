
/*global define */
define([
    'underscore',
    'backbone',
    'models/user',
    'env/settings'
], function (_, Backbone, userModel, Settings) {
    'use strict';
    var url = "http://localhost:3000/"
    var users = Backbone.Collection.extend({
        url: Settings.flix_api_url +  '/users',
        model: userModel,
        current: {},
        login: function(usr, pwd)
        {
        	var self = this;

        	$.ajax({
        		url: url + 'users/login',
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify({username: usr, password: pwd}),
        		success: function(data){
        			self.current = new userModel(data);
                    self.trigger('logged_in');
        		},
        		error: function(a, b, c){
        			self.trigger('not_logged_in');
        		}
        	});
        },
        signup: function(displayName, usr, pwd, confirmPwd)
        {
        	var self = this;
        	
        	$.ajax({
        		url: url + 'users/signup',
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify({displayName: displayName, username: usr, password: pwd}),
        		success: function(data){
                    console.log('login successful');
                    // self.current = new userModel(userModel);
        			// self.trigger('logged_in');
        		},
        		error: function(a, b, c){
        			self.trigger('not_logged_in');
        		}
        	});
        },
        isLoggedIn: function()
        {
        	var self = this;
        	this.fetch({
        		success: function(model) {
                    self.current = model.toJSON()[0];
        			self.trigger('logged_in');
        		},
        		error: function()
        		{
        			self.trigger('not_logged_in');
        		}
        	});
        }
    });

    return new users();
});
