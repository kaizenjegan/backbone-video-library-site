define(['backbone','jquery', 'compiled_templates', 'views/watch-torrent', 'common'],
	function(Backbone, $, Templates, watchTorrent, common){
		var addTorrent = Backbone.View.extend({
			el: "#video-body",
			template: Templates['add-torrent.hbs'],
			events: {
				'keydown #torrentUri': 'renderVideo'
			},
			initialize: function(){
				this.child = new watchTorrent();
				this.render();
			},
			render: function(){			
				$(this.el).html(this.template());
			},
			renderVideo: function(e){	

				if(e.keyCode === common.ENTER_KEY){
					this.child.$el = $('#video-showing');	
					var url = $(e.target).val();
					this.child.render(url);	
				}			
				

			}
		});

		return addTorrent;
	});