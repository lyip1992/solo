angular.module('notes.services', [])

  .factory('Shared', function() {

    var dataStore = new Firebase('https://glowing-torch-6026.firebaseio.com/');

    dataStore.on('child_added', function(snapshot) {
      var note = snapshot.val();
      notes.push({ title: note.title, text: note.text });
    });

    var notes = [];

    var addNote = function(title, note) {
      dataStore.push({ title: title, text: note });
    };

    var list = function() { return notes; };

    return {
      addNote: addNote,
      list: list,
    };
  });
