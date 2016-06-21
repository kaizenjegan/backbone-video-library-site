/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var videoModel = Backbone.Model.extend({
        defaults: {
            '_id': '',
            'title': '',
            'description': '',
            'cover': '',
            'url': ''
        },
        idAttribute: '_id',
        initialize: function() {

        }
    });

    return videoModel;
});