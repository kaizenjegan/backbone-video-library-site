var app = app || {};

(function() {
    app.UserModel = Backbone.Model.extend({
        defaults: {
            "_id": "",
            "oauthID": "",
            "username": "",
            "displayName": "",
            "createdDateTime": "",
            "__v": 0
        },
        idAttribute: '_id'
    });
})();