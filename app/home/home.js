'use strict';

angular.module('myApp.home', [])

.controller('HomeController', ['$scope', function($scope) {
	var giversRef = db.collection('givers');
	$scope.givers =[];

	giversRef.onSnapshot(function(querySnapshot){
		$scope.givers=[];
		querySnapshot.forEach(function(doc){
			$scope.$apply(function() {
				$scope.givers.push(doc.data());
			})
		})
	}) 
}]);