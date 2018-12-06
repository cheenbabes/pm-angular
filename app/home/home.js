'use strict';

angular.module('myApp.home', [])

	.controller('HomeController', ['$scope', function ($scope) {
		var giversRef = db.collection('givers');
		var usersRef = db.collection('users');
		$scope.givers = [];
		$scope.users = [];

		// Grab the location first thing so we can center the map correctly 
		// Also we have the location for the giver submission
		angular.element(document).ready(function () {
			getCurrentPosition().then(function (position) {
				$scope.longitude = position.coords.longitude;
				$scope.latitude = position.coords.latitude;
			}).then(function () {
				loadMap();
			}).catch(function (err) {
				console.log(err);
				console.log('Failed to correctly load map of givers');
			});
		});

		// Wrap the HTML5 location inside a promise so its easier to work with
		var getCurrentPosition = function () {
			if (navigator.geolocation) {
				return new Promise(
					(resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
				)
			} else {
				return new Promise(
					resolve => resolve({})
				)
			}
		}

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
			$scope.users = [];
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
			if ($scope.longitude && $scope.latitude) {
				toCommit.longitude = $scope.longitude;
				toCommit.latitude = $scope.latitude;
				console.log(toCommit);
			}
			db.collection('givers').doc(toCommit.email).set(toCommit);
		}

		$scope.daysLeft = function () {
			var end = new Date('January 1, 2019');
			var now = Date.now();

			return Math.round((end - now) / (1000 * 60 * 60 * 24));
		}


		// use this to cluster in the future
		// https://www.mapbox.com/mapbox-gl-js/example/cluster/
		var loadMap = function () {
			mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlZW5iYWJlcyIsImEiOiJjaXNtN2Voc2EwMDl5MnBteHlwYTgyaHNhIn0.eeTrkQTg3NSV4c6ciN-3Vw';
			var map = new mapboxgl.Map({
				container: 'mapid',
				style: 'mapbox://styles/cheenbabes/cjpbrhwde25lt2so870qhe7o1',
				center: [$scope.longitude, $scope.latitude],
				zoom: 7
			});

			return db.collection('givers').get().then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					var marker = new mapboxgl.Marker().setLngLat([doc.data().longitude, doc.data().latitude]).addTo(map);
				});
			});
		}
	}]);