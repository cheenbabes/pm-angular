'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.version',
  'myApp.login',
  'toaster',
  'ngAnimate'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
  .when('/book-form', {
    templateUrl: '/book/book.html',
    controller: 'BookFormController',
    resolve: {
      user: ['$http', '$q', function($http, $q){
        var deferred = $q.defer();
        if(firebase.auth().currentUser){
          deferred.resolve(firebase.auth().currentUser);
        } else {
          deferred.reject('NOT_AUTHORIZED');
        }
        return deferred.promise;
      }]
    }
  })
  .otherwise({redirectTo: '/'});
}])

.run(['$rootScope', '$location', function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    if(rejection === 'NOT_AUTHORIZED'){
      $location.path('/login');
    }
  })
}]);


var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
var auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

