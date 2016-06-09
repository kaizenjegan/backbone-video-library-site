var app = app || {};

(function() {
    var searches = Backbone.Collection.extend({
        url: 'http://www.omdbapi.com/',
        model: app.OMDbModel
    });

    app.OMDB = new searches();
})();