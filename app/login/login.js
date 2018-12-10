'use strict';

angular.module('myApp.login', [])

	.controller('LoginController', ['$scope', '$location', function ($scope, $location) {
        $scope.doLogin = function() {
            auth.signInWithEmailAndPassword($scope.username, $scope.password).then(function(user){
                console.log("signed in", user);
                $location.path('/');
            }).catch(function(error){
                console.log(error);
            })
        }
    
    }])