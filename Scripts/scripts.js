'use strict';

var app = angular.module('myApp', []);

app.controller('formsCtrl', function($scope){
   $scope.validate = function(){
     $scope.value = myForm.$invalid;  
   };
    
});