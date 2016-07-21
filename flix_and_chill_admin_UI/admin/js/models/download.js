define(['backbone'], function(Backbone){
	
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
		url: flixUrl + 'download'
	});

	return downloadModel;
})