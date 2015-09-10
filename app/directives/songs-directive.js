define([
  "angular",
  "firebase",
  "bootstrap"
], function(angular) {
  angular.module("SongsApp.songsDirective", [])
  .directive("songListDirective", function() {
    return {
      restrict: "E",
      templateUrl: "../partials/eachSong.html"
    };
  });
});