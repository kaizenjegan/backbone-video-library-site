define(['backbone','jquery', 'compiled_templates'], 
	function(Backbone, $, Templates){

		var addVideo = Backbone.View.extend({
			el: "#video-body",
			template: Templates['add-video.hbs'],
			initalize: function(){
				console.log('video');
				this.render();
			},
			render: function(){
				$(this.el).html(this.template());
			}
		});

		return addVideo;
	});
