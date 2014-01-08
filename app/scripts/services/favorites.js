'use strict';

angular.module('crowdNewsApp.services', [])

.provider('favorites', function () {

	var maxLen = 2;

	this.setMaxFavoritesCount = function(n) {
		maxLen = n || maxLen;
		return this;
	}

	this.$get = function ($rootScope) {
		var service = {

			favorites: [],

			getFavorites: function() {
				return service.favorites;
			},

			addToFavorites: function(item) {
				if (service.favorites.length < maxLen) {
					service.favorites.push(item);
				}
			},

			removeFromFavorites: function(item) {
				var idx = service.favorites.indexOf(item);
				service.favorites.splice(idx, 1);
			}
		}

		return service;
	};
});