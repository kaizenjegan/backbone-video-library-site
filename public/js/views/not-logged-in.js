/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'compiled_templates'
], function ($, _, Backbone, Templates) {
    var NotLoggedInView = Backbone.View.extend({
        el: '#video-body',
        template: Templates['signup.hbs'],
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).html(
                this.template()
            );

            //this should be partials
            // this.loginView = new app.LoginView({
            //     el: $('#login')
            // });
            // this.signupView = new app.SignupView({
            //     el: $('#signup')
            // });

            // this.$el.append(this.loginView.render().el);
            // this.$el.append(this.signupView.render().el);
        }
    });

    return NotLoggedInView;
});