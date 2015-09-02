app.controller("DetailCtrl", function($routeParams, $firebaseObject) {

  $("#add-music").addClass("active");
  $("#view-music").removeClass("active");
  $("#search-group").addClass("invisible");

  var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs/" + $routeParams.songid);
  this.selectedSong = $firebaseObject(ref);

});