define(['backbone'], function(Backbone){
	
	var downloadModel = Backbone.Model.extend({
		defaults: {
			'_id': '',
			'magnetUri': '',
			'name': '',
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
		idAttribute: '_id'
	});

	return downloadModel;
})