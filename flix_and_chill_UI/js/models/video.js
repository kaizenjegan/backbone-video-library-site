/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var videoModel = Backbone.Model.extend({
        defaults: {
          '_id': '',
          'name': '',
          'displayName': '',
          'description': '',
          'location': '',
          'status': '',
          'size': '',
          'type': ''
        },
        idAttribute: '_id',
        initialize: function() {

        }
    });

    return videoModel;
  });

/*
  name: String,
  displayName: String,
  description: String,
  location: [{ type: String }],
  status: { type: String }, //?
  size: Number,
  type: String
  */