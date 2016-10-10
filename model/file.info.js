var mongoose = require('mongoose');

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
  location: [{ type: String }],
  status: { type: String }, //?
  size: Number,
  type: String
},
{collection: 'fileinfo'});

module.exports = mongoose.model('FileInfo', fileInfoSchema, 'fileinfo');
// module.exports = fileInfoSchema;