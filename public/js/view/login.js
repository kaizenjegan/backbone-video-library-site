var app = app || {};

(function($) {
    app.LoginView = Backbone.View.extend({
        template: Handlebars.compile($('#login-template').html()),
        initialize: function() {
            this.render()
        },
        render: function() {
            return this.$el.html(this.template());
        }
    });
})(jQuery)