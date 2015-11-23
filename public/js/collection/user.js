var app = app || {};

(function() {
    var users = Backbone.Collection.extend({
        url: '/users/me',
        model: app.UserModel
    });

    app.Users = new users();
})();