app.controller("SongsCtrl",  function($scope, $q, $firebaseArray) {

  var ref = new Firebase("https://sizzling-torch-4887.firebaseio.com/songs");
  $scope.songs = $firebaseArray(ref);

  $("#view-music").addClass("active");
  $("#add-music").removeClass("active");
  $("#search-group").removeClass("invisible");
  $scope.artistSelector = "";
  $scope.albumSelector = "";
  $scope.searchQuery = "";

  $scope.hideSong = function(songToHide) {
    var songIndex = $scope.songs.indexOf(songToHide);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $(".content").on("click", ".hide-btn", function() {
    $(this).parents(".song-section").removeClass("fade-in-anim");
    $(this).parents(".song-section").addClass("fade-out-anim").on("animationend oAnimationEnd webkitAnimationEnd msAnimationEnd", function(e) {
      if(e.originalEvent.animationName === "fadeout") {
        $(this).addClass("full-transparent");
        $(this).removeClass("fade-out-anim");
        $(this).slideUp();
      }
    });
  });

  $scope.elementReveal = function(elementToReveal) {
    
  };

  $scope.editSong = function(songToEdit) {
    $scope.toEdit = songToEdit;
  };

  $scope.confirmEdit = function() {
    var songIndex = $scope.songs.indexOf($scope.toEdit);
    if (songIndex >= 0) {
      $scope.songs[songIndex] = toEdit;
      $scope.songs.$save();
    }
  };

  $scope.deleteSong = function(songToDelete) {
    $scope.toDelete = songToDelete;
  };

  $scope.confirmDelete = function() {
    var songIndex = $scope.songs.indexOf($scope.toDelete);
    if (songIndex >= 0) {
      $scope.songs.$remove(songIndex);
    }
  };

  $scope.resetSearch = function() {
    $scope.searchQuery = "";
  };

  $scope.getDetails = function(sentItem) {
    window.location = "#" + sentItem.$id;
  };

  $scope.resetFilter = function() {
    $scope.artistSelector = "";
    $scope.albumSelector = "";
    $(".song-section").slideDown();
    $(".song-section").addClass("fade-in-anim").on("animationend oAnimationEnd webkitAnimationEnd msAnimationEnd", function(e) {
      if(e.originalEvent.animationName === "fadein") {
        $(this).removeClass("full-transparent");
        $(this).removeClass("fade-in-anim");
      }
    });
  };

});