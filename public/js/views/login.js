define(['jquery', 'backbone', 'compiled_templates', 'collections/user', ], 
	function($, Backbone, Template, User){
	var loginView = Backbone.View.extend({
		template: Template['login.hbs'],
		events: {
			"click #btn-login": "login"
		},
		render: function(){
			this.$el.html(this.template());
			return this.$el;
		},
		login: function(){
			var username = this.$el.find('.username').val();
			var password = this.$el.find('.password').val();

			User.login(username, password);
		}
	});

	return loginView
});