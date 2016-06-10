var gulp = require('gulp');
var mongoose = require('mongoose');
var videoSchema = require('./model/video');
var Video = mongoose.model('Video', videoSchema);

gulp.task('default', function() {
  // place code for your default task here

  	// for(var i = 0; i < 10000; i++){
  		var video = new Video({
	  		title: 'Test Video',
	  		title_lower: 'test video',
	  		description: 'some random description',
	  		cover: 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
	  		url: 'http://www.w3schools.com/html/mov_bbb.mp4'
	  	});

	  	video.save(function(err){
	  		console.log('save ' + video.title);
	  	});
  	// }
  	
});


//({title: 'Test Video', title_lower: 'test video', description: 'some random description', cover: 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg', url: 'http://www.w3schools.com/html/mov_bbb.mp4'});