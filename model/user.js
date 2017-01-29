var mongoose = require('mongoose');
var q = require('q');

var usersSchema = new mongoose.Schema({
  oauthID: String,
  username: String,
  password: String,
  displayName: String,
  createdBy: Number,
  createdDateTime: { type: Date, default: Date.now },
  role: { type: String, default: 'normal' },
  isApproved: { type: Boolean, default: true }
});

//add some contraints

var userModel = mongoose.model('User', usersSchema);

var User = function () {
  this.get = function () {
    var defer = q.defer();

    userModel.find({}, function (err, u) {
      if (!err) {
        defer.resolve(u);
      } else {
        console.log('error getting FileInfo');
        defer.reject(null);
      }
    }).lean();

    return defer.promise;
  };

  this.getById = function (id) {
    var defer = q.defer();

    userModel.findOne({ _id: id }, function (err, u) {
      if (!err) {
        defer.resolve(u);
      } else {
        defer.reject(null);
      }
    }).lean();

    return defer.promise;
  }

  this.getByName = function (name) {
    var defer = q.defer();

    userModel.findOne({ username: name }, function (err, u) {
      if (!err) {
        defer.resolve(u);
      } else {
        defer.reject(null);
      }
    }).lean();

    return defer.promise;
  }

  this.add = function (obj) {
    var defer = q.defer();

    var user = new userModel({
      username: obj.username,
      password: obj.password,
      displayName: obj.displayName
    });

    user.save(function (err) {
      if (!err) {
        defer.resolve(user);
      } else {
        defer.reject(null);
      }
    });

    return defer.promise;
  }

  this.update = function (id, body) {
    var defer = q.defer();

    return defer.promise;
  }

  this.remove = function () {
    var defer = q.defer();

    return defer.promise;
  }
}

module.exports = User;