'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.version',
  'myApp.demo'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
  $routeProvider

  .when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  })
  .when('/demo', {
    templateUrl: 'demo/demo.html',
    controller: 'DemoController'
  })
  .otherwise({redirectTo: '/'});
}]);

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
var auth = firebase.auth();

