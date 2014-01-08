'use strict';

angular.module('crowdNewsApp', [
	'ngRoute',
	'crowdNewsApp.services'
])

.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html',
		})
		.when('/settings', {
			controller: 'SettingsController',
			templateUrl: 'views/settings.html',
		})
		.otherwise({
			redirectTo: '/'
		});
})

.config(function(favoritesProvider) {
	favoritesProvider.setMaxFavoritesCount(5);
})

.config(function($locationProvider) {
	//$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
})

.run(function($rootScope, VERSION) {
	$rootScope.version = VERSION;
});