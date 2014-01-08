'use strict';

angular.module('crowdNewsApp')

.controller('FrameController', function($scope) {

})

.controller('MainController', function($scope, $http, Settings, Reddit, favorites) {

	Reddit.fetchLatestArticles()
		.then(function(data) {
			$scope.news = data;
		})

	$scope.reorderNews = function(term) {
		if(term === $scope.term) {
			$scope.reverseNews = !$scope.reverseNews;
		} else {
			$scope.term = term;
		}
	};

	$scope.addToFavorites = function(item) {
		console.log('controller', item);
		favorites.addToFavorites(item);
	};

	$scope.hideStory = function() {

	};
});