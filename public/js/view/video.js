var app = app || {};

(function($) {
    app.VideoView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#video-show-template').html()),
        initialize: function(options) {
            this.render(options.videoId);
        },
        render: function(id) {
            var video = this.model.get(id).toJSON();

            $(this.el).html(
                this.template({
                    video: video
                })
            );
        },
        close: function() {
            console.log('close video view');
        }
    });
})(jQuery);