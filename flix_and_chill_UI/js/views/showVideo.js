define([
    'jquery',
    'backbone',
    'underscore',
    'compiled_templates',
    'utils/ViewManager',
    'views/deleteVideo',
    'views/alerts',
    'common',
    'collections/user'
], function($, Backbone, _, Template, vm, deleteVideoView, Alerts, common, User){

    var videoView = Backbone.View.extend({
        el: '#video-body',
        template: Template['watch-video.hbs'],
        events: {
            'click #delete': 'delete'
        },
        initialize: function(options) {
            // vm.showView(Alerts);
            console.log("page: " + common.CURR_PAGE);
            this.alerts = new Alerts();

            this.render();
        },
        render: function(id) {
            var isAdmin = false;

            if(User.current.role == "admin"){
                isAdmin = true;
            }


            $(this.el).html(
                this.template({
                    video: this.model.toJSON(),
                    isAdmin: isAdmin,
                    videoServer: 'http://localhost:3001'
                })
            );
        },
        delete: function(e) {
            vm.showView(deleteVideoView,  {model: this.model});
        },
        close: function(){
            this.alerts.close();
            $(this.el).undelegate('#delete', 'click');
        }
    });

    return videoView;
});

