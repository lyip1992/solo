angular.module('notes', [
  'notes.list',
  'notes.note',
  'notes.services',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '',
      views: {
        'list': {
          templateUrl: 'app/list/list.html',
          controller: 'ListController'
        },
        'note': {
          templateUrl: 'app/note/note.html',
          controller: 'NoteController'
        }
      }
    });
});
