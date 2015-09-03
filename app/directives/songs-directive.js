define([
  "angular",
  "angularRoute"
], function(angular) {
  angular.directive("songListDirective", function() {
    return {
      restrict: "E",
      templateUrl: "../partials/eachSong.html"
    };
  });
});