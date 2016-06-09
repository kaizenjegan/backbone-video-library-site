var app = app || {};

(function() {
    app.VideoModel = Backbone.Model.extend({
        defaults: {
            '_id': '',
            'description': '',
            'cover': '',
            'url': ''
        },
        idAttribute: '_id',
        initialize: function() {

        }
    });
})();