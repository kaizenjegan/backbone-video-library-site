define(['backbone','jquery', 'compiled_templates', 'models/video', 'collections/flixDb', 'views/alerts'],
	function(Backbone, $, Templates, VideoModel,FlixDb, Alerts){

		var addVideo = Backbone.View.extend({
			el: "#video-body",
			template: Templates['not-approved.hbs'],
			initialize: function(){
				console.log('video');
				this.alerts = new Alerts();

				this.render();
			},
			render: function(){
				this.$el.html(this.template({message: "Your profile has not been approved yet."}));
			},
			close: function(){
				this.alerts.close();
			}
		});

		return addVideo;
	});



