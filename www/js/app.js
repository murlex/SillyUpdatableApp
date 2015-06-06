/* global StatusBar */
/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var sillyApp = angular.module('SillyApp', ['ionic']);

sillyApp.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    window.BOOTSTRAP_OK = true;
    //alert("set BOOTSTRAP_OK");
    console.log("set BOOTSTRAP_OK");
  });
});
