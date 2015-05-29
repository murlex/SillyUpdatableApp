/* global sillyApp */
sillyApp.controller("sillyController", function ($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/posts/1")
    .success(function (data, status, headers, config) {
      $scope.title = data.title;
    })
    .error(function(data) {
      $scope.title = "Error: " + data;
    });
});