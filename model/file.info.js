var mongoose = require('mongoose');
var q = require('q');

/*
  author: jegan matthews

  parameters:
     name - Foo Bar
     location - downloading/foobar
     status - [downloading,
               completed
               corrupted]

  date: 10/23/2016
*/
var fileInfoSchema = mongoose.Schema({
  name: String,
  displayName: String,
  description: String,
  location: [{
    name: String,
    link: String
  }],
  status: { type: String }, //?
  size: Number,
  type: String,
  createdDate: {type: Date, default: Date.now}
},
  { collection: 'fileinfo' });

var FileInfoModel = mongoose.model('FileInfo', fileInfoSchema, 'fileinfo');

var FileInfo = function () {
  this.get = function (page, limit) {
    var defer = q.defer();

    FileInfoModel.find({}, function (err, f) {
      if (!err) {

        defer.resolve(f);
      } else {
        console.log('error getting FileInfo');
        defer.reject(null);
      }
    })
      .skip((page - 1) * limit).limit(limit);

    return defer.promise;
  };

  this.getById = function (id) {

  }

  this.add = function () {
    var defer = q.defer();

    return defer.promise;
  }

  this.update = function () {
    var defer = q.defer();

   return defer.promise;
  }

  this.remove = function () {
    var defer = q.defer();

    return defer.promise;
  }
};

module.exports = FileInfo;