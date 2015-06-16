angular.module('notes.services', [])

  .factory('Shared', function() {
    var notes = [];

    var addNote = function(note) {
      notes.push({ text: note });
    };

    var list = function() {
      return notes;
    };

    return {
      addNote: addNote,
      list: list
    };
  });
