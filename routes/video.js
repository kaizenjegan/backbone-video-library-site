var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('../env/config');
var FileInfoModel = require('../model/file.info.js');
var FileInfo = new FileInfoModel();

router.get('/', config.isAuthenticated, config.isApproved, function (req, res, next) {
  var limit = parseInt(req.query.limit);
  var page = parseInt(req.query.page);
  var title = req.query.title;

  FileInfo.get(page, limit).then(function (data) {
    res.send(data);
  }, function (err) {
    res.send(err);
  });
});

router.get('/:movieName', config.isApproved, function (req, res, next) {
  var title = req.params.movieName;

  Video.find({ title: new RegExp(title) }, function (err, v) {
    if (err) {
      res.send(err);
    }

    if (v) {
      res.send(v);
    }
  });
});

router.post('/', config.isApproved, function (req, res, next) {
  var name = req.body.title;
  var cover = req.body.cover;
  var url = req.body.url;
  var description = req.body.description;

  var video = new Video({
    title: name,
    cover: cover,
    url: url,
    description: description
  });

  video.save(function (err) {
    res.status(201).send(video);
  });
});

router.delete('/:id', config.isAuthorized, function (req, res, next) {
  var id = req.params.id;

  Video.remove({ _id: id }, function (err) {
    if (!err) {
      res.status(204).send({});
    }
    else {
      res.send(err)
    }
  })
});


//
module.exports = router;