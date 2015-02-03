describe('TeacherCtrl', function(){

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

    // used to create our TeacherCtrl for testing
    createController = function () {
      return $controller('TeacherCtrl', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        socket: socket
      });
    };
  }));

  it('FILL IN TEST', function(){
  // fill in test
  });

});