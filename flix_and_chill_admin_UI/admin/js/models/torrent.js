define(['backbone', 'env/settings'], function(Backbone, Settings){

	var flixUrl = "http://localhost:3000";

	var downloadModel = Backbone.Model.extend({
		defaults: {
			// '_id': '',
			'magnetUri': '',
			'name': 'Queued',
			'infoHash': '',
			'status': '',
			'added_on': '',
      'completed_on': '',
      'action': 'start'
		},
		idAttribute: '_id',
		// url: Settings.flix_api_url + '/queue'
	});

	return downloadModel;
})
