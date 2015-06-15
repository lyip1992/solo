angular.module('notes', [
  'notes.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'app/home/home.js'
    });

    // maybe add an otherwise statement here
});
