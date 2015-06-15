angular.module('notes', [
  'notes.home',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html', // need to implement a basic webserver to make this work
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/');
});
