define(['jquery', 'backbone', 'compiled_templates', 'collections/user'], 
	function($, Backbone, Template, Users){
		var userList = Backbone.View.extend({
			el: '#admin-body',
			template: Template['userList.hbs'],
			initialize: function(){
				Users.fetch();
				this.listenTo(Users, 'add', this.render);
				this.render();
			},
			render: function(){
				$(this.el).html(
					this.template({users: Users.toJSON()})
					);
			}
		});

		return userList;
});