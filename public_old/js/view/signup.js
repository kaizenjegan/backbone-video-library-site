var app = app || {};

(function($) {
    app.SignupView = Backbone.View.extend({
        template: Handlebars.compile($('#signup-template').html()),
        events: {
        	'click #btn-signup': 'signup'
        },
        signup: function(e)
        {
        	var username = $('#signup_username').val();
        	var password = $('#signup_password').val();
        	var confirmPwd = $('#signup_confirm').val();
        	
        	app.Users.signup(username, password, confirmPwd);
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(this.template());
        }
    });
})(jQuery)