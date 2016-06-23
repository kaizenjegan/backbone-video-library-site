define([
    'jquery',
    'backbone',
    'underscore',
    'compiled_templates'
], function($, Backbone, _, Template){

    var videoView = Backbone.View.extend({
        el: '#video-body',
        template: Template['watch-video.hbs'],
        events: {
            'click #delete': 'delete'
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
        close: function(){
            $(this.el).undelegate('#delete', 'click');
        }
    });

    return videoView;
})
