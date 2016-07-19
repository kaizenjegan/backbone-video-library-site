/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'compiled_templates',
    'common'
], function ($, _, Backbone, Templates, common) {
    var ListView = Backbone.View.extend({
        el: '#video-body',
        template: Templates['list-video.hbs'],
        events: {
            'click #next': 'next'
        },
        initialize: function() {
            common.CURR_PAGE = 1;
            var self = this;
            if(this.model){
                this.model.fetch({
                    data: {
                        page: common.CURR_PAGE,
                        limit: common.PAGE_LIMIT
                    }
                });

                this.listenTo(this.model, 'add', this.render);
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'reset', this.render);    


                $(window).scroll(function() {
                   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                        common.CURR_PAGE += 1;

                        self.model.fetch({
                            remove:false,
                            data: {
                                page: common.CURR_PAGE,
                                limit: common.PAGE_LIMIT
                            }
                        });
                   }
                });            
            }
            this.render();
        },
        next: function(e) {
            // common.CURR_PAGE += 1;

            // this.model.fetch({
            //     data: {
            //         page: common.CURR_PAGE,
            //         limit: common.PAGE_LIMIT
            //     }
            // });
        },
        render: function() {
            var self = this;
            var videos = this.model.toJSON();

            $(this.el).html(this.template({
                videos: videos,
                limit: common.CURR_PAGE
            }));
        },
        renderSearch: function() {            
            var omdb = []; 

            _.each(app.OMDB.toJSON(), function(data) {
                    omdb.push({cover: data.Poster});
                });

            $(this.el).html(
                this.template({videos: omdb})
            );
        },
        close: function() {
            $(this.el).undelegate('#AddVid', 'click');
            
            this.stopListening(this.model);
            $(window).unbind('scroll');
        }

    });

    return ListView;
});