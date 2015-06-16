angular.module('notes.list', [])
  .controller('ListController', ['$scope', 'Shared',
    function($scope, Shared) {
      $scope.list = Shared;
    }
  ]);
