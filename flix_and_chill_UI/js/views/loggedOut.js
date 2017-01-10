/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'compiled_templates',
    'views/login',
    'views/signup'
], function ($, _, Backbone, Templates, LoginView, SignupView) {
    var NotLoggedInView = Backbone.View.extend({
        el: '#video-body',
        template: Templates['logged-out.hbs'],
        events: {
          'click #login': 'toggleForms',
          'click '
        },
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).append(
                this.template()
            );

            //this should be partials
            this.loginView = new LoginView({
                el: $('#login')
            });

            this.signupView = new SignupView({
                el: $('#signup')
            });

            this.$el.append(this.loginView.render().el);
            this.$el.append(this.signupView.render().el);
        },
        close: function(){
            this.loginView.close();
            this.signupView.close();
        }
    });

    return NotLoggedInView;
});