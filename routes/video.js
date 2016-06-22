var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var videoSchema = require('../model/video');
var Video = mongoose.model('Video', videoSchema);
var config = require('../env/config');



router.get('/',  config.isAuthenticated, function(req, res, next) {
	var limit = parseInt(req.query.limit);
	var page = parseInt(req.query.page);
    var title = req.query.title;


    if(title)
    {
        Video.find({title_lower: new RegExp(title.toLowerCase())} , function(err, v) {
            if (err) {
                res.send(err);
            }

            if (v) {
                res.send(v);
            }
        });
    }else{
        Video.find({}, function(err, v) {
            if (err) {
                res.send(err);
            }

            if (v) {
                res.send(v);
            }
        }).skip((page - 1) * limit).limit(limit);    
    }

    
    var callback = function(err, v){

    }
});

router.get('/:movieName',function(req, res, next){
    var title = req.params.movieName;
    
    Video.find({title: new RegExp(title)} , function(err, v) {
        if (err) {
            res.send(err);
        }

        if (v) {
            res.send(v);
        }
    });
});

router.post('/', function(req, res, next) {
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

    video.save(function(err){
        res.status(201).send(video);
    });
});

router.delete('/:id', function(req, res, next){
    var id = req.params.id;


    Video.remove({id: id}, function(err){
        if(!err){
            res.send("success");
        }
        else
        {
            res.send(err)
        }
    })
});


//
module.exports = router;