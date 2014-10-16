'use strict';

/**
 * @ngdoc filter
 * @name audioplayerApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the audioplayerApp.
 */
angular.module('audioplayerApp')
	.filter('startFrom', function() {
		return function(input, start) {
			start = +start
			return input.slice(start)
		}
	})
