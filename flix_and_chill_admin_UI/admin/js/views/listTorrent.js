define(['jquery', 'backbone', 'compiled_templates', 'collections/torrent', 'models/torrent'],
	function($, Backbone, Template, Downloads, DownloadModel){
	var viewTorrent = Backbone.View.extend({
		el: '#admin-body',
		template: Template['listTorrents.hbs'],
		events: {
			'click .status': 'toggleDownload',
			'click .delete': 'deleteTorrent'
		},
		initialize: function(){
			Downloads.fetch();
			this.listenTo(Downloads, 'add', this.render);
			this.listenTo(Downloads, 'change', this.render);
			this.listenTo(Downloads, 'destroy', this.render);
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
				case 'stop':
					status = "start";
					break;
				case "start":
					status = "stop";
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
		deleteTorrent: function(e){
			var id = $(e.currentTarget).data('id');
			var download = Downloads.get(id);

			download.destroy();

		},
		close: function(){
			this.stopListening();
			$(this.el).undelegate('.status', 'keypress');
			$(this.el).undelegate('.delete', 'click');
		}

	});

	return viewTorrent;
})