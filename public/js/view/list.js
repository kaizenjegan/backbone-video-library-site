var app = app || {};


(function($) {
    app.ListView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#video-lib-template').html()),
        events: {
            'click #next': 'next'
        },
        initialize: function() {
            this.Page = 1;
            this.Limit = 10;

            this.model.fetch({
                data: {
                    page: this.Page,
                    limit: this.Limit
                }
            });

            this.listenTo(this.model, 'add', this.render);
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);

            this.listenTo(this.OMDB, 'add', this.renderSearch);
            this.listenTo(this.OMDB, 'change', this.renderSearch);
            this.listenTo(this.OMDB, 'reset', this.renderSearch);

        },
        next: function(e) {
            this.Page += 1;

            this.model.fetch({
                data: {
                    page: this.Page,
                    limit: this.Limit
                }
            });
        },
        render: function() {
            var self = this;
            var videos = this.model.toJSON();

            $(this.el).html(this.template({
                videos: videos,
                limit: self.Page
            }));
        },
        renderSearch: function() {            
            var omdb = []; 

            _.each(app.OMDB, function(data) {
                    omdb.append({cover: data.Poster});
                });

            $(this.el).html(
                this.template({videos: omdb})
            );
        },
        close: function() {
            console.log('close video list');
        }
    });
})(jQuery);