'use strict';

describe('Controller: SettingsController', function () {

  // load the controller's module
  beforeEach(module('crowdNewsApp'));

  var SettingsCtrl, scope, settingsservice, locationservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector, $location) {
    settingsservice = $injector.get('Settings');
    locationservice = $location;

    scope = $rootScope.$new();
    SettingsCtrl = $controller('SettingsController', {
      $scope: scope
    });
  }));

  it('should change the subreddit', function () {
    scope.subreddit = 'cars';
    scope.saveSettings();
    expect(settingsservice.getSubreddit()).toEqual('cars');
  });

  it('should redirect to index on save', function() {
    scope.saveSettings();
    expect(locationservice.path()).toEqual('/');
  });
});
