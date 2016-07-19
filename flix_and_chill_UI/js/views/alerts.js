define(['backbone',
		'jquery',
		'collections/flixDb',
		'common',
		'compiled_templates'],
function(Backbone, $, flixDb, common, Template){
	var alerts = Backbone.View.extend({
		el: "#alert",
		template: Template['alerts.hbs'],
		initialize: function(){

			this.timerId = setInterval(function(){
				flixDb.fetch({
                    data: {
                        page: common.CURR_PAGE,
                        limit: common.PAGE_LIMIT
                    }
                });

				console.log('fetching data');
			}, common.FLIX_DB_POLL_IN_SEC);

			this.listenTo(flixDb, 'add', this.render);
		},
		render: function(){
			var seconds = 1000;
			this.$el.html(
				this.template({message: common.NEW_VIDEO_ALERT})).fadeIn(500, function(){				
					setTimeout(function(){
						$('#alert').fadeOut()
					}, 7 * seconds);
			});
		},
		close: function(){
			this.stopListening(flixDb);

			clearInterval(this.timerId);
		}
	});

	return alerts;
	
});