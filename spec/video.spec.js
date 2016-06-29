var request = require('supertest');
var express = require('express');

var app = express();

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'tobi' });
// });

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     console.log('test');
//     if (err) throw err;
//   });



describe('GET /video', function() {
  it('respond with json', function(done) {
    console.log('testing');

    // request(app)
      // .get('/user')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200, done);
  });
});