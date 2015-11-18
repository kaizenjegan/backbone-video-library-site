var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var videoSchema = require('../model/video');
var Video = mongoose.model('Video', videoSchema);
var config = require('../env/config');

router.get('/',  config.isAuthenticated, function(req, res, next) {
    Video.find({}, function(err, v) {
        if (err) {
            res.send(err);
        }

        if (v) {
            res.send(v);
        }
    });

});

router.post('/', function(req, res, next) {
    res.send('post');
});

module.exports = router;