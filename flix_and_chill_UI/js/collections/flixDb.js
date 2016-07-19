/*global define */
define([
	'underscore',
	'backbone',
	'models/video'
], function (_, Backbone, videoModel) {
	'use strict';
        var videoCollection = Backbone.Collection.extend({
            url: '/video',
            model: videoModel
        });

        // app.Videos = new videoCollection();

        return new videoCollection();
});