/*global define*/
'use strict';

define([], function () {
	return {
		// Which filter are we using?
		TodoFilter: '', // empty, active, completed

		// What is the enter key constant?
		ENTER_KEY: 13,
		ESCAPE_KEY: 27,
		FLIX_DB_POLL_IN_SEC: 10000,
		CreateView: function(View, params){
			if(this.currentView){
				//this.currentView
			}

			if(params){
				this.CreateView = new View(params);
			}else
			{
				this.CreateView = new View();	
			}
			
		}
	};
});
