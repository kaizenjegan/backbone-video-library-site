var request = require('supertest')
  , express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.send(200, { name: 'toto' });
});


describe('GET /user', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'json')
      .expect(200, done);
  })
})


//Populate Db

var movie = { 
	title: "foo bar",
	// title_lower: String, //denormalized data for ease of search
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	cover: "",
	url: "http://www.w3schools.com/html/mov_bbb.mp4"
};


for(var i=0; i < 200; i++ ) { 
	movie.title = "foo bar "+ i;
	db.videos.insert(movie)
}