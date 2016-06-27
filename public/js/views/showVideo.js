define([
    'jquery',
    'backbone',
    'underscore',
    'compiled_templates',
    'utils/ViewManager',
    'views/deleteVideo'
], function($, Backbone, _, Template, vm, deleteVideoView){

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
                    video: this.model.toJSON()
                })
            );
        },
        delete: function(e) {
            vm.showView(deleteVideoView,  {model: this.model});
        },
        close: function(){
            $(this.el).undelegate('#delete', 'click');
        }
    });

    return videoView;
})
