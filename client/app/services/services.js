angular.module('notes.services', [])
  .factory('Shared', ['$firebaseArray',
    function($firebaseArray) {
      var dataStore = new Firebase('https://glowing-torch-6026.firebaseio.com/');
      return $firebaseArray(dataStore);
    }
  ]);
