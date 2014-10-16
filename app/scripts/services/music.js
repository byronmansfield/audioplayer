'use strict';

/**
 * @ngdoc service
 * @name audioplayerApp.getMusic
 * @description
 * # getMusic
 * Factory in the audioplayerApp.
 */
angular.module('audioplayerApp')
  .factory('Music', function($http) {

    var Music = {}

    Music.get = function() {
      return $http.get('data/music.json')
    }

    return Music

  })
