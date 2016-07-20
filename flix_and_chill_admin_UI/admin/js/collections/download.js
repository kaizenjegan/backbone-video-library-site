define(['jquery', 'backbone', 'models/download'], 
	function($, Backbone, downloadModel){
		'use strict'
		
		var flixUrl = "http://localhost:3000/";

		var downloads = Backbone.Collection.extend({
			model: downloadModel,
			url: flixUrl + 'download'
		});


		return new downloads;
	});