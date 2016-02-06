'use strict';

angular.module('myApp.recipeDetail', ['ngRoute', 'myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quest/:questId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

    .controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', '$location', function($scope, Restangular, $routeParams, $location) {

        $scope.questId = $routeParams.questId;

            Restangular.one('quests', $scope.questId).customGET().then(function (data) {
                $scope.quest = data;
            });

            $scope.deleteRecipe = function() {
            var confirmation = confirm('Are you sure you want to delete this recipe? This cannot be undone');

            if (confirmation) {
                Restangular.one('quests', $scope.questId).customDELETE().then(function() {
                    alert('Your quest was successfully deleted!');
                    $location.path('/quests');
                },
                function() {
                    alert('There was a problem deleting this quest.')
                })
            }
        }
    }]);