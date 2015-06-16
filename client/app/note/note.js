angular.module('notes.note', [])
  .controller('NoteController', function($scope, Shared) {

    $scope.addNote = function() {
      if( $scope.noteText ) {
        Shared.addNote($scope.noteText);
        $scope.noteText = '';
      }
    };

  });
