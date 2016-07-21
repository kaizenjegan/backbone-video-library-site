define(['jquery', 'backbone', 'compiled_templates', 'models/download', 'utils/ViewManager'], 
	function($, Backbone, Template, downloadModel, vm){

		var addTorrent = Backbone.View.extend({
			el: '#admin-body',
			template: Template['addTorrent.hbs'],
			'keypressed #magnetURI': 'addTorrent',
			events: {
				'keypress #magnetURI': 'addTorrent'
			},
			initialize: function(){
				this.render();
			},
			addTorrent: function(e){
				console.log('key pressed');
				var uri = $(e.currentTarget).val();

				//enter
				if(e.keyCode ===13 ){
					var download = new downloadModel({
						magnetUri: uri
					});


					download.save(null, {
						success:function(model, response){
						    vm.router.navigate("listTorrents", {trigger: true});
						  },
						  error: function(){
						    console.log('error download');
						  }
					});
				}
			},
			render: function(){
				this.$el.html(this.template());
			},
			close: function(){
				// this.stopListening();
				$(this.el).undelegate('#magnetURI', 'keypress');

			}
		});

		return addTorrent;
});