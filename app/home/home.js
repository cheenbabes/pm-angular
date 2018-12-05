'use strict';

angular.module('myApp.home', [])

	.controller('HomeController', ['$scope', function ($scope) {
		var giversRef = db.collection('givers');
		var usersRef = db.collection('users');
		$scope.givers = [];
		$scope.users = [];

		// get givers and force apply scope
		giversRef.onSnapshot(function (querySnapshot) {
			$scope.givers = [];
			querySnapshot.forEach(function (doc) {
				$scope.$apply(function () {
					$scope.givers.push(doc.data());
				});
			});
		});

		// get users (temples) and force apply scope
		usersRef.onSnapshot(function (querySnapshot) {
			$scope.givers = [];
			querySnapshot.forEach(function (doc) {
				$scope.$apply(function () {
					$scope.users.push(doc.data());
				});
			});
		});

		$scope.submitGiver = function () {
			var toCommit = {
				name: $scope.giverName,
				email: $scope.giverEmail,
				country: $scope.giverCountry
			};
			navigator.geolocation.getCurrentPosition(function (position) {
				$scope.longitude = position.coords.longitude;
				$scope.latitude = position.coords.latitude;

				toCommit.longitude = $scope.longitude;
				toCommit.latitude = $scope.latitude;
				console.log(toCommit);
				db.collection('givers').doc(toCommit.email).set(toCommit);
			}, function (err) {
				console.log("Geolocation was blocked, submitting without geolocation");
				db.collection('givers').doc(toCommit.email).set(toCommit);
			});
		}

		$scope.daysLeft = function () {
			var end = new Date('January 1, 2019');
			var now = Date.now();

			return Math.round((end - now) / (1000 * 60 * 60 * 24));

		}
	}]);