'use strict';

/**
 * @ngdoc function
 * @name audioplayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the audioplayerApp
 */
angular.module('audioplayerApp')
	.controller('MainCtrl', function ($scope, $rootScope, Music) {

		$scope.music = []
		$scope.currentTrack = 0
		$scope.pageSize = 5

		Music.get().then(function(music) {
			$scope.music = music.data
		})

		var updateTrack = function() {
			$rootScope.$broadcast(
				'audio.set'
				, 'mp3/' + $scope.music[$scope.currentTrack].file
				, $scope.music[$scope.currentTrack]
				, $scope.currentTrack
				, $scope.music.length
			)
		}

		$rootScope.$on('audio.next', function() {
				$scope.currentTrack++
				if($scope.currentTrack < $scope.music.length) {
					updateTrack()
				} else {
					$scope.currentTrack=$scope.music.length-1
				}
		})

		$rootScope.$on('audio.prev', function() {
				$scope.currentTrack--
				if($scope.currentTrack >= 0) {
					updateTrack()
				} else {
					$scope.currentTrack = 0
				}
		})

	})
