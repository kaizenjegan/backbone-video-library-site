var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var fileInfoSchema = require('../model/file.info.js');
// var fileinfo = mongoose.model('fileinfo', fileInfoSchema, 'fileinfo');
var queueSchema = require('../model/queue');
var TorrenModel = require('../model/torrent');
var Torrent = new TorrenModel();
var redis = require('redis');
var client = redis.createClient();


router.get('/', env.isAuthorized, function (req, res, next) {
  console.log('torrents endpoint')
  Torrent.get().then(function (torrents) {
    console.log('getting torrents');
    res.status(200).send(torrents);
  },
    function (err) {
      console.log(err);
    });
});

router.post('/', env.isAuthorized, function (req, res, next) {
  Torrent.add({
    magnetUri: req.body.magnetUri,
    name: req.body.name
  }).then(function (data) {
    res.status(200).send(data);
  }, function (err) {
    res.status(500).send({ msg: 'shit dude. problem creating torrents' });
  });
});

router.put('/', env.isAuthorized, function (req, res, next) {
  Torrent.update(req.body._id, { action: req.body.status }).then(function (data) {
    d.resolve(d);
  }, function (err) {
    d.reject(null);
  });
});

router.delete('/:id', env.isAuthorized, function (req, res, next) {
  console.log(req.body);
  console.log(req.params._id)

  Torrent.remove(req.params._id).then(function (data) {
    res.send(data);
  }, function (err) {
    res.send(err);
  });
});

module.exports = router;