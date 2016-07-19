define(['backbone', 'jquery', 'compiled_templates', 'webtorrent'],
	function(Backbone, $, Template, WebTorrent){
		var showVideo = Backbone.View.extend({
			el: '#watch-torrent',
			template: Template['watch-torrent.hbs'],
			initialize: function(options){
				// this.render();


			},
			render: function(url){

				var client = new WebTorrent();
				var self = this;

				client.add(url, function (torrent) {
				   var file = torrent.files[0]
					file.appendTo('body') // append the file to the DOM
				});


				// return this.$el.html(
				// 	this.template({
				// 		url: url
				// 	})
				// );


			}
		});	

		return showVideo;
	})