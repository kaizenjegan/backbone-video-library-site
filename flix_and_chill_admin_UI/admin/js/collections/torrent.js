define(['jquery', 'backbone', 'models/torrent', 'env/settings'],
	function($, Backbone, downloadModel, Settings){
		'use strict'

		var downloads = Backbone.Collection.extend({
			model: downloadModel,
			url: Settings.flix_api_url + '/torrents'
		});


		return new downloads;
	});