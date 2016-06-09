var app = app || {};


(function() {
        var videoCollection = Backbone.Collection.extend({
            url: '/video',
            model: app.VideoModel
        });

        app.Videos = new videoCollection();
    }

)();