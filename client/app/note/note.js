angular.module('notes.note', [])
  .controller('NoteController', function($scope, Shared) {

    $scope.addNote = function() {
      if( $scope.noteTitle && $scope.noteText ) {
        Shared.addNote($scope.noteTitle, $scope.noteText);
        $scope.noteTitle = '';
        $scope.noteText = '';
      }
    };

  });
