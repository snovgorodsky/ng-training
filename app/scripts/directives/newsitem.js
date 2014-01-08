'use strict';

angular.module('crowdNewsApp')

.directive('newsItem', function(){
	return {
		restrict: 'A',
		templateUrl: 'views/newsItem.html',
		replace: true,
		scope: {
			'ngModel': '=',
			'clickedFavorite': '&'
		},
		link: function(scope) {
			scope.hasImage = function() {
				return scope.ngModel.data.thumbnail != 'default' && scope.ngModel.data.thumbnail != 'nsfw' && scope.ngModel.data.thumbnail != 'self'
			}

			scope.onFavorite = function() {
				console.log('Favorited!');
				scope.clickedFavorite({
					news: scope.ngModel
				});
			};
		}
	};
});