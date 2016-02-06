'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/quests', {
            templateUrl: 'recipes/recipes.html',
            controller: 'QuestCtrl'
        });
    }])

    .controller('QuestCtrl', ['$scope', 'Restangular', '$modal', function ($scope, Restangular, $modal) {
        Restangular.all('quests').getList().then(function (quests) {
            $scope.quests = quests;
        });

        $scope.deleteRecipe = function (questID) {
            Restangular.one('quests', questID).customDELETE().then(function () {
                $location.path('/quests');
            })
        };

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'recipes/myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (quest) {
                $scope.recipes.push(quest);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }])
    .controller('ModalInstanceCtrl', ['$scope', 'Restangular', '$modalInstance', 'items', function ($scope, Restangular, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function (quest) {
            $modalInstance.close(quest);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.quest = {
            monsters: [],
            tags: []
        };

        // Add the monsters to the quest object we're building
        $scope.addMonsterToQuest = function (monsterName) {
            var monster = {name: monsterName};
            $scope.quest.monsters.push(monster);
            $scope.monsterName = '';
        };

        // Add the tags to the quest object we're building
        $scope.addTagToQuest = function (tagName) {
            var tag = {name: tagName};
            $scope.quest.tags.push(tag);
            $scope.tagName = '';
        };

        // Add a new recipe, alert the user when it's been created or when there was a problem.
        $scope.addQuest = function () {
            Restangular.all('add-quest').customPOST($scope.quest).then(function (quest) {
                    alert("Your quest was successfully created.BGYHJ");
                    $scope.ok(quest)
                },
                function () {
                    alert("There was a problem creating your quest. Please try again.")
                })
        }
    }]);


