var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

  app.controller('Ctrl', function($scope) {
  $scope.user = {    
    post_code: '',    
    country: '',
    address: '',
    city: ''       
  };  
});