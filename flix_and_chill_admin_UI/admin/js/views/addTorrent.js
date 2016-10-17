define(['jquery', 'backbone', 'compiled_templates', 'models/torrent', 'collections/torrent', 'utils/ViewManager'],
	function($, Backbone, Template, downloadModel, Q, vm){

		var addTorrent = Backbone.View.extend({
			el: '#admin-body',
			template: Template['addTorrent.hbs'],
			events: {
				'keypress #magnetURI': 'addTorrent'
			},
			initialize: function(){
				this.render();
			},
			addTorrent: function(e){
				console.log('key pressed');
				var uri = $(e.currentTarget).val();
				var self = this;
				//enter
				if(e.keyCode ===13 ){
					var download = new downloadModel({
						magnetUri: uri
					});

					Q.create(download, {
						type: 'POST',
						success: function(a, b, c){
							console.log('success');
							vm.router.navigate("listTorrents", {trigger: true});
						},
						error: function(err){
							console.log('err')
						}
					});

				}
			},
			render: function(){
				this.$el.html(this.template());
			},
			close: function(){
				console.log('closing')
				this.stopListening();
				$(this.el).undelegate('#magnetURI', 'keypress');

			}
		});

		return addTorrent;
});