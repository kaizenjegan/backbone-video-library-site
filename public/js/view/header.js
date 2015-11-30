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
            this.listenTo(app.OMDB, 'add', this.renderOMDB);
            this.listenTo(app.OMDB, 'change', this.renderOMDB);

            this.listenTo(app.Videos, 'change', this.renderFlix);
            this.listenTo(app.Videos, 'add', this.renderFlix);


            app.Videos.on('result_empty', this.renderOMDBresults);
        },
        Enter_Pressed: function(e) {
            if (e.keyCode === 13) {
                this.search(null);
            }

        },
        search: function(e) {
            var query = $('#search').val();

            app.Videos.fetch({
                data: {
                    title: query
                },
                success: function(model, response) {
                    
                    //If no results from flix server 
                    if (response.length < 1) { 
                        app.OMDB.fetch({
                            data: $.param({
                                t: query
                            })
                        });
                    }
                }
            });
        },
        renderFlix:function()
        {
            $('#video-body').html(

                this.template({
                    videos: app.Videos.toJSON()
                })
                //bind
            );
        },
        download: function(e) {
            console.log('download');
        },
        renderOMDB: function() {

            $('#video-body').html(

                this.template({
                    videos: app.OMDB.toJSON()
                })
                //bind
            );
        },
        renderFlix: function() {
            
            var search_result = app.Videos.toJSON()[0];
            $('#video-body').html(
                this.template({ 
                        videos: [{
                            Poster: search_result.cover,
                            Plot: search_result.description
                        }]
                })
            );
        }
    });
})(jQuery);