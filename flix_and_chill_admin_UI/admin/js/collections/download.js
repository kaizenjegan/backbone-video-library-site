define(['jquery', 'backbone', 'models/download', 'env/settings'], 
	function($, Backbone, downloadModel, Settings){
		'use strict'
		
		var downloads = Backbone.Collection.extend({
			model: downloadModel,
			url: Settings.flix_api_url + '/download'
		});


		return new downloads;
	});