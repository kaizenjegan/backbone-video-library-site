define(['jquery', 'backbone', 'compiled_templates', 'collections/user', ], 
    function($, Backbone, Template, User){
        var SignupView = Backbone.View.extend({
            template: Template['signup.hbs'],
            events: {
                'click #btn-signup': 'signup'
            },
            signup: function(e)
            {
                var displayName = this.$el.find('.displayName').val();
                var username = this.$el.find('.username').val();
                var password = this.$el.find('.password').val();
                var confirmPwd = this.$el.find('.reentry').val();
                
                User.signup(displayName, username, password, confirmPwd);
            },
            render: function() {
                return this.$el.html(this.template());
            }
        });

        return SignupView;
});
