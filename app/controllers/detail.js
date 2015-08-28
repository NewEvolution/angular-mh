app.controller("DetailCtrl", function($scope, $routeParams, $firebaseObject) {

  $("#add-music").addClass("active");
  $("#view-music").removeClass("active");
  $("#search-group").addClass("invisible");

  var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs/" + $routeParams.songid);
  $scope.selectedSong = $firebaseObject(ref);

});