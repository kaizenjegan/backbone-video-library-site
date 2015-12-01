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
        },
        Enter_Pressed: function(e) {
            if (e.keyCode === 13) {
                this.search(null);
            }

        },
        search: function(e) {
            var query = $('#search').val();


            app.OMDB.fetch({
                data: $.param({t: query})
            });

            app.Videos.fetch({
                data: {
                    title: query
                },
                success: function(model, response){
                    if(response.length < 1){
                        app.OMDB.fetch({
                            data: $.param({t: query})
                        });
                    }
                }
            });
        }        
    });
})(jQuery);