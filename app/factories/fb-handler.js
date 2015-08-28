app.controller("FBCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs");
  $scope.songs = $firebaseArray(ref);
  return {
    getArray: function() {
      return $scope.songs;
    },
    addToArray: function(songObj) {
      $scope.songs.$add(sentObj);
    },
    editArray: function(songKey, songObj) {
      $scope.songs.$save({songkey: songObj});
    },
    deleteFromArray: function(songKey) {
      $scope.songs.$remove(songKey);
    }
  };
});