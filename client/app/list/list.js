angular.module('notes.list', [])
  .controller('ListController', function($scope, Shared) {

    $scope.list = function (argument) {
      return Shared.list();
    };

  });
