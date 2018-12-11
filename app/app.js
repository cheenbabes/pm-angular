'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.version',
  'myApp.login',
  'toaster',
  'ngAnimate'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
  $routeProvider

  .when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  })
  .when('/login', {
    templateUrl: '/login/login.html',
    controller: 'LoginController'
  })
  .otherwise({redirectTo: '/'});
}]);

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
var auth = firebase.auth();

