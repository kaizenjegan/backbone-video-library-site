var should = require("should"); 
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
// var superagent = require('superagent');
var request = require('supertest');  
var mongoose = require('mongoose');
var config = require('../env/config');
var url = "http://localhost:" + (process.env.PORT || '3000');
var userSchema = require('../model/user');
var User = mongoose.model('User', userSchema);



var mock = {
	displayname: 'coolKid',
	username: 'test',
	password: 'testees'
}

describe('Test API', function () {
  describe('test()', function() {
	
	before(function(done) {
		// In our tests we use the test db
		mongoose.connect(config.mongooseURL);							
		done();
	});

	process.env.PORT || '3000'

    it('should', function(done) {
      request(url)
        .post('/users/signup')
        .send({displayname: mock.displayname, username: mock.username, password: mock.password})
        // .query({test: 123})
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res){

          expect(err).to.equal(null);
          expect(res.body.username).to.equal(mock.username);
          done();
        });
    });


    after(function(done){
    	User.remove({username: mock.username}, function(err, u){
    		if(!err){
    			console.log('deleting user successful');
    		}else{
    			console.log(err);
    		}

    		done();

    	})

    });
    
  });
});