var app = app || {};

(function($)
{
	app.SignupView = Backbone.View.extend({
		template: Handlebars.compile($('#signup-template').html()),
		initialize: function()
		{
			this.render()
		},
		render: function()
		{
			return this.$el.html( this.template() );
		}
	});
})(jQuery)