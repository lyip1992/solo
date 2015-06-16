angular.module('notes', [
  'notes.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '',
      views: {
        'note': {
          templateUrl: 'app/home/note.html',
          controller: 'HomeController'
        }
      }
    });
});
