'use strict';

angular.module('myApp.signup', [])

.controller('SignUpController', ['$scope', 'toaster', '$location', '$timeout', function($scope, toaster, $location, $timeout){

    $scope.createUser = function(){
        if($scope.password !== $scope.password2){
            toaster.pop('success', 'Passwords do not match', '');
            return;
        }
        auth.createUserWithEmailAndPassword($scope.email, $scope.password)
            .then(function(authUser){
                //Just go ahead and log the user in 
               return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
                   return  auth.signInWithEmailAndPassword($scope.email, $scope.password).then((function(user){
                       return db.collection('users').doc(user.user.uid).set({
                           email: $scope.email,
                           temple: $scope.temple,
                           city: $scope.city
                       }).then(function(){
                        $timeout(function(){
                            toaster.pop('success', 'Successfully registered. Logging you in now and redirecting', err)
                        }, 0);
                            $location.path('/');
                       })
                   }))
               })
            }).catch(function(err){
                console.log(err);
                $timeout(function(){
                    toaster.pop('error', 'Error during sign up', err)
                }, 0);
            })
    }
}]);