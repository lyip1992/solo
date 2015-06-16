angular.module('notes.list', [])
  .controller('ListController', ['$scope', 'Shared',
    function($scope, Shared) {
      $scope.list = Shared;

      $scope.remove = function(index) {
        $scope.list.$remove(index);
      };

    }
  ]);
