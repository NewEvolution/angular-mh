app.controller("AddCtrl", ["$scope", "song-storage", function($scope, songStorage) {

  $("#add-music").addClass("active");
  $("#view-music").removeClass("active");
  $("#search-group").addClass("invisible");
  $scope.songs = [];
  $scope.songToAdd = {
    id: $scope.songs.length,
    title: "",
    artist: "",
    album: "",
    genre: "",
  };

  songStorage.then(function(returnedData) {
    for (var i = 0; i < returnedData.songs.length; i++) {
      $scope.songs.push(returnedData.songs[i]);
    }
  }, function(error) {
    console.log(error);
  });

  $scope.selectDropdown = function(clickedElement, type) {
    if(type === "artist") {
      $scope.songToAdd.artist = clickedElement.artist;
    }
    if(type === "album") {
      $scope.songToAdd.album = clickedElement.album;
    }
  };

  $("#add-submit").click(function(e) {
    e.preventDefault();
  });

  $scope.addSong = function() {
    var validCount = 0;
    for(var key in $scope.songToAdd) {
      if($scope.songToAdd[key] === "") {
        alert("The " + key + " field cannot be left blank.");
        validCount = 0;
        break;
      } else {
        validCount++;
      }
    }
    if(validCount === 4) {
      $scope.songs.push($scope.songToAdd);
      for(var alsoKey in $scope.songToAdd) {
        $scope.songToAdd[alsoKey] = "";
      }
    }
  };

}]);