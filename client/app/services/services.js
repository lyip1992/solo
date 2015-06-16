angular.module('notes.services', [])

  .factory('Shared', function() {
    var notes = [
      { text: 'I am a note' },
      { text: 'I am another note' }
    ];

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
