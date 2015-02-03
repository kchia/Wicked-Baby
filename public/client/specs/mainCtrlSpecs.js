describe('MainCtrl', function(){

  var $scope, $rootScope, $location, $window, $httpBackend, createController, socket;	
  
  beforeEach(module('wickedBaby'));
  
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    $httpBackend = $injector.get('$httpBackend');
    socket = $injector.get('socket');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our MainCtrl for testing
    createController = function () {
      return $controller('MainCtrl', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        socket: socket
      });
    };

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $window.localStorage.removeItem('com.wickedBaby');
  });

  it('FILL IN TEST', function(){
    // fill in test
  });

});