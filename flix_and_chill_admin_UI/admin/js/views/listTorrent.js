define(['jquery', 'backbone', 'compiled_templates', 'collections/download'], 
	function($, Backbone, Template, Downloads){
	var viewTorrent = Backbone.View.extend({
		el: '#admin-body',
		template: Template['listTorrents.hbs'],
		initialize: function(){
			Downloads.fetch();
			this.listenTo(Downloads, 'add', this.render);
			this.render();
		},
		render: function(){
			this.$el.html(
				this.template({
					torrents: Downloads.toJSON()
				})
			);
		}
	});

	return viewTorrent;
})