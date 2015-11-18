var app = app || {};


(function($){
	app.ListView = Backbone.View.extend({
		el: '#video-body',
		template: Handlebars.compile( $('#video-lib-template').html() ),
		initialize: function()
		{
			this.listenTo(this.model, 'reset', this.render)
		},
		render: function()
		{
			var videos = this.model.toJSON();
			$(this.el).html( this.template({videos: videos}) );
		}
	})
})(jQuery)