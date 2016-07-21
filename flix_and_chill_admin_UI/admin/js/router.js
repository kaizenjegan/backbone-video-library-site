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
	    	'user': 'users',
	        'addTorrent': 'AddTorrent',
	        'listTorrents': 'ListTorrents',
	        'users': 'users'
			// "*action": "home"
	    },
	    users: function(){
      		vm.showView(UserListView);
	    },
	    AddTorrent: function(){
	    	// console.log("add torrent");
	    	vm.showView(AddTorrentView);
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
