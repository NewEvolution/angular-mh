define([
  "angular",
  "firebase",
  "bootstrap"
], function(angular) {
  angular.module("SongsApp.songs_directive", [])
  .directive("songListDirective", function() {
    return {
      restrict: "E",
      templateUrl: "../partials/eachSong.html"
    };
  });
});