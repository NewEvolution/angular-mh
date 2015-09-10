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

    $("#add-music").addClass("active");
    $("#view-music").removeClass("active");
    $("#search-group").addClass("invisible");
    this.songToAdd = {
      id: "",
      title: "",
      artist: "",
      album: "",
      genre: "",
    };

    this.songs.$loaded().then(angular.bind(this, function(data) {
      this.songToAdd.id = data.length;
    }));

    this.selectDropdown = function(clickedElement, type) {
      if(type === "artist") {
        this.songToAdd.artist = clickedElement.artist;
      }
      if(type === "album") {
        this.songToAdd.album = clickedElement.album;
      }
      if(type === "genre") {
        this.songToAdd.genre = clickedElement.genre;
      }
    };

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
      if(validCount === 5) {
        this.songs.$add(this.songToAdd);
        for(var alsoKey in this.songToAdd) {
          this.songToAdd[alsoKey] = "";
        }
      }
    };
  }]);
});

