app.controller("DetailCtrl", ["$scope", "$routeParams", "song-storage", function($scope, $routeParams, songStorage) {

  $scope.songs = [];

  songStorage.then(function(returnedData) {
    for (var i = 0; i < returnedData.songs.length; i++) {
      $scope.songs.push(returnedData.songs[i]);
    }
    $scope.selectedSong = $scope.songs.filter(function(item) {
      return item.id === parseInt($routeParams.songid);
    })[0];
  }, function(error) {
    console.log(error);
  });

}]);