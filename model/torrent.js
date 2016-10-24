var mongoose = require('mongoose');
var fileInfoSchema = require('./file.info.js')
var q = require('q');

var torrentSchema = mongoose.Schema({
  magnetUri: String,
  infoHash: String,
  _fileinfo: { type: mongoose.Schema.ObjectId, ref: 'FileInfo' },
  name: String,
  status: { type: String, default: 'stopped' },
  added_on: { type: Date, default: Date.now },
  completed_on: { type: Date },
  action: { type: String, default: 'start' }
});

//add constraint to prevent duplicate magnetUri
//add constraint to prevent empty magnetUri
//add constraint to regex magnetURI to the

var Torrent = mongoose.model('Torrent', torrentSchema);

var TorrentModel = function () {
  this.get = function (id) {
    var defer = q.defer();

    if (id) {
      Torrent.find({ _id: id }, function (err, t) {
        if (!err) {
          defer.resolve(t);
        } else {
          defer.reject(err);
        }
      }).populate('_fileinfo');
    } else {
      Torrent.find({}, function (err, t) {
        if (!err) {
          defer.resolve(t);
        } else {
          defer.reject(err);
        }
      }).populate('_fileinfo');
    }

    return defer.promise;
  }

  this.add = function (obj) {
    var defer = q.defer();

    if (!obj.magnetUri && !obj.name) {
      defer.reject(null);
    }

    var torrent = new Torrent({
      magnetUri: obj.magnetUri,
      name: obj.name
    });

    torrent.save(function (err) {
      if (!err) {
        // res.status(200).send(queue);
        defer.resolve(torrent);
      } else {
        console.log(err);
        defer.reject(null);
      }
    });

    return defer.promise;
  }

  this.update = function (id, body) {
    var defer = q.defer();

    Torrent.update({ _id: id }, body, function (err, d) {
      if (!err) {
        d.resolve(d);
      } else {
        d.reject(null);
      }
    });

    return defer.promise;
  }

  this.remove = function (id) {
    var defer = q.defer();

    Torrent.remove({ _id: id }, function (err, d) {
      if (!err) {
        defer.resolve(d);
      } else {
        defer.reject(null);
      }
    });

    return defer.promise;
  }
}

module.exports = TorrentModel;