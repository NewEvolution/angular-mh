var app = angular.module("SongsApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongsCtrl",
        controllerAs: "songs"
      }).when("/add", {
        templateUrl: "partials/add-song.html",
        controller: "AddCtrl",
        controllerAs: "add"
      }).when("/:songid", {
        templateUrl: "partials/song-detail.html",
        controller: "DetailCtrl",
        controllerAs: "detail"
      }).otherwise({
        redirectTo: "/"
      });
  }]);