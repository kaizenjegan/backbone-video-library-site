/*global define*/
'use strict';

define([], function () {
	return {
		// Which filter are we using?
		TodoFilter: '', // empty, active, completed
		CURR_PAGE: 0,
		PAGE_LIMIT: 12,
		// What is the enter key constant?
		ENTER_KEY: 13,
		ESCAPE_KEY: 27,
		FLIX_DB_POLL_IN_SEC: 10000,
		NEW_VIDEO_ALERT: "A new video haz been added"
	};
});
