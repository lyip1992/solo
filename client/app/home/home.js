angular.module('notes.home', [])
  .controller('HomeController', function($scope) {
    $scope.notes = [];

    $scope.addNote = function() {
      $scope.notes.push({text: $scope.noteText });
    };


  });
