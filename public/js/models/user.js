define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    
    var userModel = Backbone.Model.extend({
        defaults: {
            "_id": "",
            "oauthID": "",
            "username": "",
            "displayName": "",
            "createdDateTime": "",
            "role": "",
            "__v": 0
        },
        idAttribute: '_id'
    });

    return userModel;
});