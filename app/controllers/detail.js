define([
  "angular",
  "angularRoute"
], function(angular) {
  angular.module("SongsApp.detail", ["ngRoute"])
  .config(["$routeProvider", "$routeParams", "$firebaseObject", function($routeProvider, $routeParams, $firebaseObject) {
    $routeProvider.when("/:songid", {
      templateUrl: "../paritals/song-detail.html",
      controller: "DetailCtrl"
    });
  }])
  .controller("DetailCtrl", [function() {

    $("#add-music").addClass("active");
    $("#view-music").removeClass("active");
    $("#search-group").addClass("invisible");

    var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs/" + $routeParams.songid);
    this.selectedSong = $firebaseObject(ref);
    
  }]);
});

