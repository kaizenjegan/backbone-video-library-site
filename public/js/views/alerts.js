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
				flixDb.fetch();
				console.log('fetching data');
			}, common.FLIX_DB_POLL_IN_SEC);

			this.listenTo(flixDb, 'add', this.render);
		},
		render: function(){
			var seconds = 1000;
			this.$el.html(
				this.template({message: "A new video has been added"})).fadeIn(500, function(){				
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