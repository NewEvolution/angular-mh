app.controller("AddCtrl", function($scope) {

  $scope.songToAdd = {
    id: $scope.songs.length,
    title: "",
    artist: "",
    album: "",
    genre: "",
  };

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

});