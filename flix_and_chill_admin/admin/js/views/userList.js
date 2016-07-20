define(['jquery', 'backbone', 'compiled_templates', 'collections/user'], 
	function($, Backbone, Template, Users){
		var userList = Backbone.View.extend({
			el: '#admin-body',
			template: Template['userList.hbs'],
			events: {
				'change .approval': 'checkChanged'
			},
			initialize: function(){
				Users.fetch();
				this.listenTo(Users, 'add', this.render);
				this.render();
			},
			checkChanged: function(e){
				var $checkBox = $(e.currentTarget);
				var isApproved = $checkBox.is(":checked") ? true : false;
				var id = $checkBox.data('id');

				console.log(id);

				var userModel = Users.get(id);
				userModel.set({isApproved: isApproved});

				userModel.save({
					success:function(a, b, c){
						console.log("success");
					},
					error: function(a, b, c){
						console.log("fail");
					}
				});
			},
			render: function(){
				$(this.el).html(
					this.template({users: Users.toJSON()})
					);
			}
		});

		return userList;
});