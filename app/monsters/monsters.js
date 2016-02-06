'use strict';

angular.module('myApp.monsters', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/monsters', {
            templateUrl: 'monsters/monsters.html',
            controller: 'MonstersCtrl'
        });
    }])

    .controller('MonstersCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('monsters').getList().then(function (data) {
            $scope.monsters = data;
        });
    }]);