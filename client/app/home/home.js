angular.module('notes.home', [])
  .controller('HomeController', function($scope, Shared) {

    $scope.addNote = function() {
      Shared.addNote($scope.noteText);
    };


  });
