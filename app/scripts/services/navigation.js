'use strict';

/**
 * @ngdoc service
 * @name audioplayerApp.navigation
 * @description
 * # navigation
 * Factory in the audioplayerApp.
 */
angular.module('audioplayerApp')
  .factory('Navigation', function () {

    var Navigation = {}

    Navigation.links = function() {

      var Links = [
        {
          name: 'Home'
          , link: 'home'
          , order: 1
          , icon: 'fa-home'
          , external: false
        }
        , {
          name: 'About'
          , link: 'about'
          , order: 2
          , icon: 'fa-info-circle'
          , external: false
        }
      ]

      return Links

    }

    return Navigation

  })
