'use strict';

angular.module('myApp.login', [])

	.controller('LoginController', ['$scope', '$location', 'toaster', '$timeout', function ($scope, $location, toaster, $timeout) {
        $scope.doLogin = function() {
            auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
                auth.signInWithEmailAndPassword($scope.username, $scope.password).then(function(user){
                    console.log("signed in", user);
                    $timeout(function(){
                        toaster.pop('success', "Login successful", '')
                    },0)
                    $location.path('/');
                }).catch(function(error){
                    console.log(error);
                    $timeout(function(){
                        toaster.pop('danger', 'Error!', "There was an issue with your login. Please try again")
                    },0)
                });
            });
        }
    }]);