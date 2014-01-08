'use strict';

angular.module('crowdNewsApp.services')

.constant('VERSION', '0.1')

.service('Settings', function Settings() {
	var subreddit = 'pics';

	this.setSubreddit = function(r) {
		subreddit = r || subreddit;
		return this;
	}

	this.getSubreddit = function() {
		return subreddit;
	}
});