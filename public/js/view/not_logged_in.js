var app = app || {};

(function($) {
    app.NotLoggedInView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#not-logged-template').html()),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).html(
                this.template()
            );

            this.loginView = new app.LoginView({
                el: $('#login')
            });
            this.signupView = new app.SignupView({
                el: $('#signup')
            });

            this.$el.append(this.loginView.render().el);
            this.$el.append(this.signupView.render().el);
        }
    });
})(jQuery);