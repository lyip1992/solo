
angular.module('notes.services', [])

  .factory('Shared', function() { // implement firebase here

    var dataStore = new Firebase('https://glowing-torch-6026.firebaseio.com/');

    dataStore.on('child_added', function(snapshot) {
      var note = snapshot.val();
      notes.push({ title: note.title, text: note.text });
    });

    var notes = []; // need a way to show all messages before

    var addNote = function(title, note) {
      dataStore.push({ title: title, text: note }); // this push is working right now
    };

    var list = function() {
      return notes;
    };

    return {
      addNote: addNote,
      list: list,
    };
  });
