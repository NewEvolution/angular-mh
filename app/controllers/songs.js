define([
  "angular",
  "firebase"
], function(angular) {
  angular.module("SongsApp.songs", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "../partials/song-list.html",
      controller: "SongsCtrl",
      controllerAs: "songs"
    });
  }])
  .controller("SongsCtrl", ["$q", "$firebaseArray", function($q, $firebaseArray) {
    var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs");
    this.songs = $firebaseArray(ref);
    console.log(this.songs);

    $("#view-music").addClass("active");
    $("#add-music").removeClass("active");
    $("#search-group").removeClass("invisible");
    this.artistSelector = "";
    this.albumSelector = "";
    this.searchQuery = "";

    $(".content").on("click", ".hide-btn", function() {
      $(this).parents(".song-section").removeClass("fade-in-anim");
      $(this).parents(".song-section").addClass("fade-out-anim").on("animationend oAnimationEnd webkitAnimationEnd msAnimationEnd", function(e) {
        if(e.originalEvent.animationName === "fadeout") {
          $(this).addClass("full-transparent");
          $(this).removeClass("fade-out-anim");
          $(this).slideUp();
        }
      });
    });

    this.elementReveal = function(elementToReveal) {
      
    };

    this.editSong = function(songToEdit) {
      this.toEdit = songToEdit;
    };

    this.confirmEdit = function() {
      var songIndex = this.songs.indexOf(this.toEdit);
      if (songIndex >= 0) {
        this.songs[songIndex] = toEdit;
        this.songs.$save();
      }
    };

    this.deleteSong = function(songToDelete) {
      this.toDelete = songToDelete;
    };

    this.confirmDelete = function() {
      var songIndex = this.songs.indexOf(this.toDelete);
      if (songIndex >= 0) {
        this.songs.$remove(songIndex);
      }
    };

    this.resetSearch = function() {
      this.searchQuery = "";
    };

    this.getDetails = function(sentItem) {
      window.location = "#" + sentItem.$id;
    };

    this.resetFilter = function() {
      this.artistSelector = "";
      this.albumSelector = "";
      $(".song-section").slideDown();
      $(".song-section").addClass("fade-in-anim").on("animationend oAnimationEnd webkitAnimationEnd msAnimationEnd", function(e) {
        if(e.originalEvent.animationName === "fadein") {
          $(this).removeClass("full-transparent");
          $(this).removeClass("fade-in-anim");
        }
      });
    };
  }]);
});

