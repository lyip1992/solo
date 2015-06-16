angular.module('notes', [
  'notes.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '',
      views: {
        'home': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController'
        }
      }
    });
});
