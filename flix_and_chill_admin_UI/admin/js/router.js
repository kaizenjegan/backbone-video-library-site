/*global define*/
define([
	'jquery',
	'backbone',
	'utils/ViewManager',
	'views/userList',
	'views/addTorrent',
	'views/listTorrent'
], function ($, Backbone, vm, UserListView, AddTorrentView, ListTorrentView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	    	'home': 'home',
	        'addTorrent': 'AddTorrent',
	        'listTorrents': 'ListTorrents',
	        'users': 'users'
			// "*action": "home"
	    },
	    home: function(){
      		vm.showView(UserListView);
	    },
	    AddTorrent: function(){
	    	// console.log("add torrent");
	    	vm.showView(AddTorrentView);
	    },
	    users: function() {
	    	
	    },
	    addVideo: function(){
	    	// ViewManager.showView(AddVideoView);
	    	
	    },
	    ListTorrents: function(){
	    	vm.showView(ListTorrentView);
	    }
	});

	return AppRouter;
});
