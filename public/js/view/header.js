var app = app || {};

(function($) {
    app.HeaderView = Backbone.View.extend({
        el: '#header',
        template: Handlebars.compile($('#search-result-template').html()),
        events: {
            'click #btn-search': 'search',
            'keydown #search': 'Enter_Pressed'
        },
        initialize: function() {
            this.render();
            //app.Search.
            this.listenTo(app.Search, 'add', this.render);
            this.listenTo(app.Search, 'change', this.render);

            this.listenTo(app.Videos, 'change', this.renderFlix);
            this.listenTo(app.Videos, 'add', this.renderFlix);
        },
        Enter_Pressed: function(e) {
            if (e.keyCode === 13) {
                this.search(null);
            }

        },
        search: function(e) {

            // var query = $('#search').val();
            // console.log(query);
            // app.Search.fetch({
            //     data: $.param({
            //         t: query
            //     })
            // });
            this.searchFlixServer();
        },
        searchFlixServer: function()
        {
            var query = $('#search').val();

            app.Videos.fetch({ data: {title: query}});
        },
        download: function(e) {
            console.log('download');
        },
        render: function() {

            $('#video-body').html(

                this.template({
                    videos: app.Search.toJSON()
                })
                //bind
            );
            // console.log(app.Search.toJSON());
        }
    });
})(jQuery);