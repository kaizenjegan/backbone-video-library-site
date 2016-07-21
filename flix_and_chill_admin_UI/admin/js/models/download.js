define(['backbone', 'env/settings'], function(Backbone, Settings){
	
	var flixUrl = "http://localhost:3000/";

	var downloadModel = Backbone.Model.extend({
		defaults: {
			// '_id': '',
			'magnetUri': '',
			'name': 'Untitled Unmastered',
			'size_in_GB': '',
			'status': '',
			'seeds': '',
			'peers': '',
			'downloadSpeed': '',
			'uploadSpeed': '',
			'eta': '',
			'added_on': '',
			'completed_on': '',
			"__v": 0
		},
		idAttribute: '_id',
		url: Settings.flix_api_url + 'download'
	});

	return downloadModel;
})