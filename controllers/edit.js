var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

  app.controller('Ctrl', function($scope) {
  $scope.user = { 
    First: 'John',
    Last:'Hogan',
    card: '123456789',
    email: 'john@gmail.com',
    tel: '123-45-67'     
  };  
});

  app.controller('RadiolistCtrl', function($scope, $filter) {
  $scope.user = {
    status: 1
  }; 

  $scope.statuses = [
    {value: 1, text: 'Male'},
    {value: 2, text: 'Female'}
  ]; 

  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  };
});