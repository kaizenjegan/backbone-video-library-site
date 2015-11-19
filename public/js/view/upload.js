var app = app || {};


(function($)
{
	app.UploadView = Backbone.View.extend({
		el: '#video-body',
		template: Handlebars.compile( $('#upload-template').html()),
		initialize: function()
		{
			this.render();
		},
		render: function()
		{
			$(this.el).html(
				this.template()
				);
		}
	});
})(jQuery);