angular.module('notes.note', [])
  .controller('NoteController', ['$scope', 'Shared',
    function($scope, Shared) {
      $scope.list = Shared;

      $scope.addNote = function () {
        if( $scope.noteTitle && $scope.noteText ) {
          $scope.list.$add({ title: $scope.noteTitle, text: $scope.noteText });
          $scope.noteTitle = '';
          $scope.noteText = '';
        }
      };
    }
  ]);
