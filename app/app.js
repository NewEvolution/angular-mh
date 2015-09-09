define([
  "angular",
  "angularRoute",
  "angularFilter",
  "angularfire",
  "bootstrap",
  "controllers/add",
  "controllers/songs",
  "controllers/detail",
  "directives/songs-directive"
], function(angular, angularRoute, filter, bootstrap, angularfire, songs, add, detail, songs_directive) {
  // Declare app level module which depends on views, and components
  return angular.module("SongsApp", [
    "ngRoute",
    "angular.filter",
    "firebase",
    "SongsApp.songs",
    "SongsApp.add",
    "SongsApp.detail",
    "SongsApp.songs_directive"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

