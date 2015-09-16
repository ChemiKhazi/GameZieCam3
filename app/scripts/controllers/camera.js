'use strict';

/**
 * @ngdoc function
 * @name gzcam3App.controller:CameraCtrl
 * @description
 * # CameraCtrl
 * Controller of the gzcam3App
 */
angular.module('gzcam3App')
  .controller('CameraCtrl', ['$scope', function ($scope) {
    $scope.video;
    $scope.videoCanvas;
  }]);
