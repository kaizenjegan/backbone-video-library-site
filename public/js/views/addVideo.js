define(['backbone','jquery', 'compiled_templates', 'models/video', 'collections/flixDb'],
	function(Backbone, $, Templates, VideoModel,FlixDb){
		
		var addVideo = Backbone.View.extend({
			el: "#video-body",
			template: Templates['add-video.hbs'],
			events: {
				'click #AddVid': 'saveVideo'
			},
			initialize: function(){
				console.log('video');
				this.render();
			},
			render: function(){			
				this.$el.html(this.template());
			},
			//TODO: add input validation
			saveVideo: function(){
				var model = new VideoModel({					
		            title: $('#vid-title').val(),
		            description: $('#vid-description').val(),
		            url: $('#vid-url').val(),
		            cover: $('#vid-img-url').val(),
				});

				function saveSuccess(a,b,c)	{
					console.log('success');
				}

				function saveError(err){
					console.log('failure');
				}


				FlixDb.create(model,{
					type: 'POST',
					success: saveSuccess,
					error: saveError
				});
			}
		});

		return addVideo;
	});



