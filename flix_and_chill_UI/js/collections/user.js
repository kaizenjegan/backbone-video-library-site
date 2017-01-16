
/*global define */
define([
    'underscore',
    'backbone',
    'models/user'
], function (_, Backbone, userModel) {
    'use strict';

    var users = Backbone.Collection.extend({
        url: '/users/me',
        model: userModel,
        current: {},
        login: function(usr, pwd)
        {
        	var self = this;

        	$.ajax({
        		url: 'users/login',
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify({username: usr, password: pwd}),
        		success: function(data){
        			self.current = new userModel(userModel);
                    self.trigger('logged_in');
        		},
        		error: function(jqXHR, textStatus, errorThrown){
        			self.trigger('not_logged_in');
        		}
        	});
        },
        signup: function(displayName, usr, pwd, confirmPwd)
        {
        	var self = this;

        	$.ajax({
        		url: 'users/signup',
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

              if (self.current.isApproved) {
                self.trigger('logged_in');
              } else {
                self.trigger('not_approved');
              }
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
