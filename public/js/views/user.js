define(['jquery', 'backone', 'compiled_templates', 'collections/user'], 
	function($, Backbone, Template, User){
		var userView = Backbone.View.extend({
			el: "#video-body",
			template: Template['user.hbs'],
			initialize: function(){
				this.render();
			},
			render: function(){
				
			}
		})

		return userView;
	}

});