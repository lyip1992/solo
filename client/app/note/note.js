angular.module('notes.note', [])
  .controller('NoteController', ['$scope', 'Shared',
    function($scope, Shared) {
      $scope.list = Shared;

      $scope.addNote = function () {
        $scope.list.$add({ title: 'Temporary title', text: 'Temporary text' });
      };

      $scope.edit = function (note) {
        var key = note.$id;
        var record = $scope.list.$getRecord(key);

        $scope.note = record;
      };

    }
  ]);
