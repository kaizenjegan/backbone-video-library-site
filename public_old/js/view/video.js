var app = app || {};

(function($) {
    app.VideoView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#video-show-template').html()),
        events: {
            'click #save': 'download'
        },
        initialize: function(options) {
            this.render();
        },
        render: function(id) {
            $(this.el).html(
                this.template({
                    video: this.model
                })
            );
        },
        download: function(e) {
            console.log('save');
        },
        close: function() {
            console.log('close video view');
        }
    });
})(jQuery);