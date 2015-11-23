var app = app || {};

(function($) {
    app.LoginView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#login-template').html()),
        initialize: function() {
            this.render();
        },
        render: function() {
            $(this.el).html(
                this.template()
            );
        }
    });
})(jQuery);