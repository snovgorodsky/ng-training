'use strict';

angular.module('crowdNewsApp')

.controller('SettingsController', function($scope, $location, Settings, Reddit) {
	$scope.subreddit = Settings.getSubreddit();

	$scope.saveSettings = function() {
		Settings.setSubreddit($scope.subreddit);
		$location.path('/');
	};
});