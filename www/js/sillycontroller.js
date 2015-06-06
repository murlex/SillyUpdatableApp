/// <reference path="../../typings/cordova/cordova.d.ts"/>
/* global CordovaAppLoader */
/* global CordovaPromiseFS */
/* global sillyApp */

//var SERVER = 'http://195.62.19.72/sillyapp/';
var SERVER = 'http://10.0.3.2:8000/Documents/GitHub/SillyUpdatableApp/www/';

sillyApp.controller("sillyController", function ($scope, $http) {

  function getLoader() {
    if (window.loader != undefined)
      return window.loader;
    var fs = new CordovaPromiseFS({ persistent: typeof cordova !== 'undefined' });
    if(location.host === 'localhost:8080'){
      SERVER = 'http://localhost:8080/';
    }
    var loader = window.loader = new CordovaAppLoader({
      fs: fs,
      localRoot: 'app',
      serverRoot: SERVER,
      mode: 'mirror',
      cacheBuster: true
    });
    return loader;
  }
  
  $http.get("http://jsonplaceholder.typicode.com/posts/1")
    .success(function (data, status, headers, config) {
      $scope.title = data.title;
    })
    .error(function(data) {
      $scope.title = "Error: " + data;
    });
    
  function setStatus(msg){
    $scope.status = JSON.stringify(msg,null,2);
    if(!$scope.$$phase) {
      $scope.$apply();
    }
  }
    
  $scope.check = function () {
    setStatus("Working...");
    var cacheBuster = "?"+Math.random();
    getLoader().check(SERVER + "manifest.json" + cacheBuster).then(setStatus,setStatus);
  };
  
  $scope.download = function () {
    setStatus("Working...");
    getLoader().download().then(setStatus,setStatus); 
  };
  
  $scope.update = function () {
    setStatus("Working...");
    setStatus(getLoader().update());
  };
  
  $scope.reload = function () {
    setStatus("Working...");
    location.reload();
  };
  
  $scope.restore = function () {
    setStatus("Working...");
    getLoader().reset().then(setStatus,setStatus);
  };
  
});