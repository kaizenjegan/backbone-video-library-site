var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
	title: String,
    	description: String,
	cover: String,
	url: String
});

module.exports = videoSchema;
