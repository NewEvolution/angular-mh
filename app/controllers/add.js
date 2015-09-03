define([
  "jquery",
  "angular",
  "bootstrap"
], function($, angular) {
  angular.module("SongsApp.add", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/add", {
      templateUrl: "../partials/add-song.html",
      controller: "AddCtrl",
      controllerAs: "add"
    });
  }])
  .controller("AddCtrl", ["$firebaseArray", function($firebaseArray) {
    var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs");
    this.songs = $firebaseArray(ref);
    console.log(this.songs);

    $("#add-music").addClass("active");
    $("#view-music").removeClass("active");
    $("#search-group").addClass("invisible");
    this.songToAdd = {
      id: this.songs.length,
      title: "",
      artist: "",
      album: "",
      genre: "",
    };

    this.selectDropdown = function(clickedElement, type) {
      if(type === "artist") {
        this.songToAdd.artist = clickedElement.artist;
      }
      if(type === "album") {
        this.songToAdd.album = clickedElement.album;
      }
    };

    $("#add-submit").click(function(e) {
      e.preventDefault();
    });

    this.addSong = function() {
      var validCount = 0;
      for(var key in this.songToAdd) {
        if(this.songToAdd[key] === "") {
          alert("The " + key + " field cannot be left blank.");
          validCount = 0;
          break;
        } else {
          validCount++;
        }
      }
      if(validCount === 4) {
        this.songs.$add(songToAdd);
        for(var alsoKey in this.songToAdd) {
          this.songToAdd[alsoKey] = "";
        }
      }
    };
  }]);
});

