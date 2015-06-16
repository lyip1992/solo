angular.module('notes', [
  'firebase',
  'notes.note',
  'notes.services',
  'ui.router'
])
.config(function($stateProvider) { // $urlRouterProvider, $httpProvider
  $stateProvider
    .state('home', {
      url: '',
      views: {
        'note': {
          templateUrl: 'app/note/note.html',
          controller: 'NoteController'
        }
      }
    });
});
