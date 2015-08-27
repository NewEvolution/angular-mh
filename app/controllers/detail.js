app.controller("DetailCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
  $scope.selectedSong = $scope.songs.filter(function(item) {
    return item.id === parseInt($routeParams.songid);
  })[0];
}]);