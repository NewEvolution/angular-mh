define([
  "angular",
  "angularRoute",
  "angularFilter",
  "angularfire",
  "controllers/add",
  "controllers/songs",
  "controllers/detail",
  // "directives/songs-directive"
], function(angular, angularRoute, filter, angularfire, songs, add, detail, songListDirective) {
  // Declare app level module which depends on views, and components
  return angular.module("SongsApp", [
    "ngRoute",
    "angular.filter",
    "firebase",
    "SongsApp.songs",
    "SongsApp.add",
    "SongsApp.detail",
    // "SongsApp.songListDirective"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

