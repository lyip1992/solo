angular.module('notes.note', [])
  .controller('NoteController', function($scope, Shared) {

    $scope.addNote = function() {
      Shared.addNote($scope.noteText);
    };


  });
