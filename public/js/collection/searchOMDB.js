var app = app || {};

(function() {
    var searches = Backbone.Collection.extend({
        url: 'http://www.omdbapi.com/',
        model: app.SearchModel
    });

    app.Search = new searches();
})();