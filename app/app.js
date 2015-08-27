var app = angular.module("SongsApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongsCtrl'
      }).when('/add', {
        templateUrl: 'partials/add-song.html',
        controller: 'AddCtrl'
      }).when('/:songid', {
        templateUrl: 'partials/song-detail.html',
        controller: 'DetailCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);