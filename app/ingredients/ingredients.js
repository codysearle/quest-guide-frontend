'use strict';

angular.module('myApp.ingredients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ingredients', {
    templateUrl: 'ingredients/ingredients.html',
    controller: 'IngredientsCtrl'
  });
}])

.controller('IngredientsCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.all('ingredients').getList().then(function(data) {
        $scope.ingredients = data;
    });
}]);