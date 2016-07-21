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
					success:function(model, response){
						    // vm.router.navigate("listTorrents", {trigger: true});
						    console.log("successfully approved user")
						  },
						  error: function(){
						    console.log('error approving users');
						  }
					});
			},
			render: function(){
				$(this.el).html(
					this.template({users: Users.toJSON()})
					);
			},
			close: function(){
				this.stopListening();
			}
		});

		return userList;
});