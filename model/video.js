var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
	title: String,
	title_lower: String, //denormalized data for ease of search
  description: String,
	cover: String,
	url: String
});

module.exports = videoSchema;
