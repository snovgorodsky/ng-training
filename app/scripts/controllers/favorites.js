'use strict';

angular.module('crowdNewsApp')

.controller('FavoritesController', function($scope, favorites) {

	$scope.$on('favorites:add', function(evt) {
		$scope.faves = favorites.getFavorites;
	})

	$scope.faves = favorites.getFavorites();

	$scope.removeFromFavorites = function(item) {
		favorites.removeFromFavorites(item);
		$scope.faves = favorites.getFavorites();
	}
})