'use strict';

angular.module('crowdNewsApp.services')

.factory('Reddit', function ($http, $q, Settings) {

	var baseUrl = 'http://www.reddit.com/r/',
		routeUrl = '/new.json';

	var service = {
		getRedditUrl: function() {
			return baseUrl + Settings.getSubreddit() + routeUrl;
		},

		fetchLatestArticles: function() {
			var d = $q.defer();

			$http({
				method: 'JSONP',
				url: service.getRedditUrl(),
				params: {
					'jsonp': 'JSON_CALLBACK',
				},
			})
			.success(function(data) {
				d.resolve(data.data.children);

				console.log(data.data.children);
			})
			.error(function(reason) {
				d.reject('Errrrrrror!');
			});

			return d.promise;
		}
	};

	return service;
});
