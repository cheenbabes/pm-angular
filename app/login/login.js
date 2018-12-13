'use strict';

angular.module('myApp.login', [])

	.controller('LoginController', ['$scope', '$location', 'toaster', function ($scope, $location, toaster) {
        $scope.doLogin = function() {
            auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
                auth.signInWithEmailAndPassword($scope.username, $scope.password).then(function(user){
                    console.log("signed in", user);
                    toaster.pop('success', "Login successful", '')
                    $location.path('/');
                }).catch(function(error){
                    console.log(error);
                    toaster.pop('danger', 'Error!', "There was an issue with your login. Please try again")
                });
            });
        }
    }]);