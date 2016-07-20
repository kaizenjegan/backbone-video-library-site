define(['jquery', 'backbone', 'compiled_templates'], 
	function($, Backbone, Template){

		var addTorrent = Backbone.View.extend({
			el: '#admin-body',
			template: Template['addTorrent.hbs'],
			'keypressed #magnetURI': 'addTorrent',
			events: {
				'keypressed #magnetURI': 'addTorrent'
			},
			initialize: function(){
				this.render();
			},
			addTorrent: function(e){
				var uri = $(e.currentTarget).val();
			},
			render: function(){
				this.$el.html(this.template());
			}
		});

		return addTorrent;
});