var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var TorrenModel = require('../model/torrent');
var Torrent = new TorrenModel();
var redis = require('redis');
var client = redis.createClient();


router.get('/', env.isAuthorized, function (req, res, next) {
  console.log(req.user.username + ' getting list of torrents');
  Torrent.get().then(function (torrents) {
    console.log('get torrents success');
    res.status(200).send(torrents);
  },
    function (err) {
      console.log("error getting torrent");
      console.log(err);
    });
});

router.post('/', env.isAuthorized, function (req, res, next) {
  console.log("SvcVideoServer " + req.user.username + 'is creating torrent ' + req.body.magnetUri);

  if (!req.body.magnetUri) {
    console.log('empty magnetUri');
    res.status(400).send('magnetUri is empty');
  }

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
  console.log(req.user.username + ' is updating torrent');
  // Torrent.update(req.body._id, { action: req.body.status }).then(function (data) {
  //   // d.resolve(d);
  //   res.send(data);
  // }, function (err) {
  //   res.
  // });

});

router.delete('/:id', env.isAuthorized, function (req, res, next) {
  console.log(req.user.username + " is deleting torrent " + req.params._id);

  Torrent.remove(req.params._id).then(function (data) {
    res.send(data);
  }, function (err) {
    res.send(err);
  });
});

module.exports = router;