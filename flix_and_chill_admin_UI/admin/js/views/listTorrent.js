define(['jquery', 'backbone', 'compiled_templates', 'collections/download', 'models/download'], 
	function($, Backbone, Template, Downloads, DownloadModel){
	var viewTorrent = Backbone.View.extend({
		el: '#admin-body',
		template: Template['listTorrents.hbs'],
		events: {
			'click .status': 'toggleDownload'
		},
		initialize: function(){
			Downloads.fetch();
			this.listenTo(Downloads, 'add', this.render);
			this.listenTo(Downloads, 'change', this.render);
			this.render();
		},
		render: function(){
			this.$el.html(
				this.template({
					torrents: Downloads.toJSON()
				})
			);
		},
		toggleDownload: function(e){
			var $selectedElement = $(e.currentTarget);
			var id = $selectedElement.data('id');
			var downloadName = $selectedElement.data('name');
			var status = $selectedElement.text();
			var download = Downloads.get(id);

			switch(status){
				case 'stopped':
					status = "started";
					break;
				case "started":
					status = "stopped";
					break;
			}
			download.set({status: status});

			download.save(null, {
				success: function(model, response){
					console.log(downloadName + " " + status);
				},
				error: function(){
					console.log(" ");
				}
			})

		},
		close: function(){
			$(this.el).undelegate('.status', 'keypress');
		}

	});

	return viewTorrent;
})