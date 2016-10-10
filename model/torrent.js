var mongoose = require('mongoose');
var fileInfoSchema = require('./file.info.js')

var torrentSchema = mongoose.Schema({
  magnetUri: String,
	infoHash: String,
	_fileinfo: { type: mongoose.Schema.ObjectId, ref: 'FileInfo'},
	name: String,
	status: {type: String, default: 'stopped'},
	added_on: {type: Date, default: Date.now},
	completed_on: {type: Date},
  action: {type: String, default: 'start'}
});

// var fileinfo = mongoose.model('FileInfo', fileInfoSchema, 'fileinfo');

module.exports = mongoose.model('Torrent', torrentSchema);