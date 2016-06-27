define(['compiled_templates',
		'views/showVideo',
		'utils/ViewManager',
		'collections/flixDb'], 
	function(Template, showVideo, vm, FlixDb){

	var deleteVideo = Backbone.View.extend({
		el: '#video-body',
		template: Template['delete-video.hbs'],
		events: {
			'click #yes': 'delete',
			'click #no': 'cancel'
		},
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(
				this.template({video: this.model.toJSON()})
				);
		},
		delete: function(){
			// var model = FlixDb.get(this.model.toJSON()._id);
			// console.log(model);
			this.model.destroy({success: function(){
					 // Backbone.sync();
					 vm.router.navigate('home', {trigger: true});

				}
			})

		},
		cancel: function(){
			// vm.showView(showVideo, {model: this.model});

			var model = FlixDb.get(this.model.toJSON()._id);
			console.log(model);

			model.destroy({success: function(){
					 // Backbone.sync();
					 vm.router.navigate('home', {trigger: true});

				}
			})

		}
	});

	return deleteVideo;

})