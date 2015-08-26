app.controller("SongsCtrl", function($scope) {
  $scope.newTitle = "";
  $scope.newAlbum = "";
  $scope.newArtist = "";

  $scope.songs = [
    {
      title: "Smells Like Teen Spirit",
      album: "Nevermind",
      artist: "Nirvana"
    },
    {
      title: "Slow Bicycle",
      album: "Yesterday Was Dramatic - Today is O.K.",
      artist: "múm"
    },
    {
      title: "Kitchenware & Candybars",
      album: "Purple",
      artist: "Stone Temple Pilots"
    }
  ];

  $scope.addSong = function() {
    $scope.songs.push({title: $scope.newTitle, album: $scope.newAlbum, artist: $scope.newArtist});
    $scope.newTitle = "";
    $scope.newAlbum = "";
    $scope.newArtist = "";
  };

  $scope.removeSong = function(songToRemove) {
    var songIndex = $scope.songs.indexOf(songToRemove);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  function getSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/todos.json"
      }).done(function(data) {
        resolve(data.todos);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }
  getTodoList().then(function(resolvedData) {
    $scope.todos = resolvedData;
  }, function(error) {
    console.log("error", error);
  });
});