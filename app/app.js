define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "controllers/add",
  "controllers/songs",
  "controllers/detail",
  "filters/capitalize",
  "directives/songs-directive",
], function(angular, bootstrap, angularfire, angularRoute, filter, add, songs, detail, capitalizeFilter, songsDirective) {
  return angular.module("SongsApp", [
    "ngRoute",
    "firebase",
    "SongsApp.add",
    "angular.filter",
    "SongsApp.songs",
    "SongsApp.detail",
    "SongsApp.songsDirective",
    "SongsApp.capitalizeFilter"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

