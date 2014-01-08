'use strict';

describe('Controller: FavoritesController', function () {

  // load the controller's module
  beforeEach(module('crowdNewsApp'));

  var FavoritesCtrl, scope;
  var favoritesService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    FavoritesCtrl = $controller('FavoritesController', {
      $scope: scope
    });

    favoritesService = $injector.$get('favorites');

    favorites = [
      {data: {title: 'One Favorite'}},
      {data: {title: 'Two Favorite'}}
    ]
  
    favoritesService.favorites = favorites;

  }));

  it('should have a faves array', function () {
    expect(scope.faves).toBeDefined();
  });

  it('should call remove function and remove a favorite'), function() {
    scope.removeFromFavorites(favorites[1]);
    expect(scope.faves.length).toEqual(1);

  }
});
