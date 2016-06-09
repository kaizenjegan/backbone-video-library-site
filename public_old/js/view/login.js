var app = app || {};

(function($) {
    app.LoginView = Backbone.View.extend({
        template: Handlebars.compile($('#login-template').html()),
        events: {
        	'click #btn-login': 'login'
        },
        login: function(e){
        	// var login = new app.UserModel()
        	var username = $("#login_username").val();
        	var password = $("#login_password").val();

        	app.Users.login(username, password);
        },
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(this.template());
        }
    });
})(jQuery)