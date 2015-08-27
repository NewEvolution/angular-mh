app.controller("SongsCtrl", [ "$scope", "$q", "song-storage", function($scope, $q, songStorage) {

  $("#view-music").addClass("active");
  $("#add-music").removeClass("active");
  $("#search-group").removeClass("invisible");
  $scope.songs = [];
  $scope.artistSelector = "";
  $scope.albumSelector = "";
  $scope.searchQuery = "";

  $scope.removeSong = function(songToRemove) {
    var songIndex = $scope.songs.indexOf(songToRemove);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.resetSearch = function() {
    $scope.searchQuery = "";
  };

  $scope.getDetails = function(sentItem) {
    window.location = "#" + sentItem.id;
  };

  $scope.resetFilter = function() {
    $scope.artistSelector = "";
    $scope.albumSelector = "";
  };

  songStorage.then(function(returnedData) {
    for (var i = 0; i < returnedData.songs.length; i++) {
      $scope.songs.push(returnedData.songs[i]);
    }
  }, function(error) {
    console.log(error);
  });

}]);