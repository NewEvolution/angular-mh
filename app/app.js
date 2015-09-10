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
], function(angular, angularRoute, filter, bootstrap, angularfire, songs, add, detail, songsDirective) {
  return angular.module("SongsApp", [
    "ngRoute",
    "angular.filter",
    "firebase",
    "SongsApp.songs",
    "SongsApp.add",
    "SongsApp.detail",
    "SongsApp.songsDirective"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

