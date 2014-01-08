'use strict';

describe('Directive: newsItem', function () {

  // load the directive's module
  beforeEach(module('crowdNewsApp'));

  var element, scope;

  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.ngModel = {data: {title: 'Directs are cool (from Reddit)'}};
    element = angular.element('<div news-item></div>');
    element = $compile(element)(scope);
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(element.text()).toBe('');
  }));
});
