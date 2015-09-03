define([
  "angular",
  "angularRoute",
  "bootstrap"
], function(angular) {
  angular.module("SongsApp.detail", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/:songid", {
      templateUrl: "../partials/song-detail.html",
      controller: "DetailCtrl",
      controllerAs: "detail"
    });
  }])
  .controller("DetailCtrl", ["$routeParams", "$firebaseObject", function($routeParams, $firebaseObject) {

    $("#add-music").addClass("active");
    $("#view-music").removeClass("active");
    $("#search-group").addClass("invisible");

    var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs/" + $routeParams.songid);
    this.selectedSong = $firebaseObject(ref);
    
  }]);
});

