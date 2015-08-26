app.controller("SongsCtrl", function($scope, $q) {

  $scope.songs = "";
  $scope.songSelector = "";

  $scope.removeSong = function(songToRemove) {
    var songIndex = $scope.songs.indexOf(songToRemove);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  function getSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/songlist.json"
      }).done(function(data) {
        resolve(data);
      }, function(xhr, status, error) {
        reject(error);
      });
    });
  }

  function getMoreSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/moresongs.json"
      }).done(function(data) {
        resolve(data);
      }, function(xhr, status, error) {
        reject(error);
      });
    });
  }

  $scope.removeSong = function(songToRemove) {
    var songIndex = $scope.songs.indexOf(songToRemove);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  getSongs().then(function(resolvedData) {
    $scope.songs = resolvedData.songs;
  }, function(error) {
    console.log("error", error);
  });

  getMoreSongs().then(function(resolvedData) {
    for(var i=0; i<resolvedData.songs.length; i++) {
      $scope.songs.push(resolvedData.songs[i]);
    }
  }, function(error) {
    console.log("error", error);
  });

});