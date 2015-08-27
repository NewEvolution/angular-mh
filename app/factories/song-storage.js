app.factory("song-storage", function($q, $http) {
  function getSongs() {
    return $q(function(resolve, reject) {
      $http.get("./data/songlist.json")
      .success(function(data) {
        resolve(data);
      }, function(error) {
        reject(error);
      });
    });
  }
  return getSongs();
});