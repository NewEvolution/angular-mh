define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "controllers/add",
  "controllers/songs",
  "controllers/detail",
  "directives/songs-directive"
], function(angular, bootstrap, angularfire, angularRoute, filter, add, songs, detail, songsDirective) {
  return angular.module("SongsApp", [
    "ngRoute",
    "firebase",
    "SongsApp.add",
    "angular.filter",
    "SongsApp.songs",
    "SongsApp.detail",
    "SongsApp.songsDirective"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

