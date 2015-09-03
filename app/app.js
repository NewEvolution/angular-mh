define([
  "angular",
  "angularRoute",
  "controllers/songs",
  "controllers/add",
  "controllers/detail"
], function(angular, angularRoute, songs, add, detail) {
  // Declare app level module which depends on views, and components
  return angular.module("SongsApp", [
    "ngRoute",
    "angularFilter",
    "firebase",
    "SongsApp.songs",
    "SongsApp.add",
    "SongsApp.detail"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

