/*global define*/
define([
    'jquery',
    'backbone',
    'compiled_templates',
    'collections/user'
], function ($, Backbone, Templates, User) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: '#video-navigation',
        template: Templates['navigation.hbs'],
        // events: {
        //     'click #btn-search': 'search',
        //     'keydown #search': 'Enter_Pressed'
        // },
        initialize: function() {
            this.render();
        },
        Enter_Pressed: function(e) {
            if (e.keyCode === 13) {
                this.search(null);
            }

        },
        render: function(){
            this.$el.html(this.template({name: User.current.displayName}));
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