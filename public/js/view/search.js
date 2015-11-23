var app = app || {};

(function($) {
    app.SearchView = Backbone.View.extend({
        el: '#video-body',
        template: Handlebars.compile($('#search-result-template').html()),
        events: {
            // 'keyup #search': 'search'
            'click #btn-search': 'search'
        },
        initialize: function() {
            this.render();
            //app.Search.
            this.listenTo(app.Search, 'add', this.render);
            this.listenTo(app.Search, 'change', this.render);
        },
        search: function(e) {

            var query = $('#search').val();
            console.log(query);
            app.Search.fetch({
                data: $.param({
                    t: query
                })
            });
        },
        render: function() {

            $(this.el).html(

                this.template({
                    videos: app.Search.toJSON()
                })

            );
            // console.log(app.Search.toJSON());
        }
    });
})(jQuery);