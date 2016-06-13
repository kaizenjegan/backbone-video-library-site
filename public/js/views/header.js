/*global define*/
define([
    'jquery',
    'backbone',
    'compiled_templates'
], function ($, Backbone, Templates) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: '#header',
        template: Templates['search-results.hbs'],
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

    return HeaderView;
});