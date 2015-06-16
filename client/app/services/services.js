angular.module('notes.services', [])

  .factory('Shared', function() {
    var notes = [
      { title: 'Note 1', text: 'I am a note' },
      { title: 'Note 2', text: 'I am another note' }
    ];

    var addNote = function(title, note) {
      notes.push({ title: title, text: note });
    };

    var list = function() {
      return notes;
    };

    return {
      addNote: addNote,
      list: list,
    };
  });
