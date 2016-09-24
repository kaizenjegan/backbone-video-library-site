define(['jquery', 'backbone', 'models/queue', 'env/settings'], 
	function($, Backbone, downloadModel, Settings){
		'use strict'
		
		var downloads = Backbone.Collection.extend({
			model: downloadModel,
			url: Settings.flix_api_url + '/queue'
		});


		return new downloads;
	});