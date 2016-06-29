define(['backbone','jquery', 'compiled_templates', 'models/video', 'collections/flixDb', 'views/alerts'],
	function(Backbone, $, Templates, VideoModel,FlixDb, Alerts){
		
		var addVideo = Backbone.View.extend({
			el: "#video-body",
			template: Templates['add-video.hbs'],
			events: {
				'click #AddVid': 'saveVideo'
			},
			initialize: function(){
				console.log('video');
				this.alerts = new Alerts();

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
					
					$('#vid-title').val("");
					$('#vid-description').val("");
					$('#vid-url').val("");
					$('#vid-img-url').val("");
				}

				function saveError(err){
					console.log('failure');
				}


				FlixDb.create(model,{
					type: 'POST',
					success: saveSuccess,
					error: saveError
				});
			},
			close: function(){
				this.alerts.close();
				$(this.el).undelegate('#AddVid', 'click');
			}
		});

		return addVideo;
	});



