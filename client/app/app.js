angular.module('notes', [
  'notes.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '',
      views: {
        'search': {
          templateUrl: 'app/home/search.html',
          controller: 'HomeController'
        },

        'nav': {
          templateUrl: 'app/home/nav.html',
          controller: 'HomeController'
        },

        'list': {
          templateUrl: 'app/home/list.html',
          controller: 'HomeController'
        },
        'note': {
          templateUrl: 'app/home/note.html',
          controller: 'HomeController'
        }
      }
    });
});
