//------------------------------------------------------------------------------------------------
// Angular main module
//------------------------------------------------------------------------------------------------

var mainMod = angular.module('RateIt',['ngRoute','ngResource']);

//main configuration
mainMod.config(function($routeProvider, $locationProvider){
    
    //this removes the hashtag # poblem
    $locationProvider.html5Mode(true); 
    
    $routeProvider.when('/',{
        templateUrl:'home.html'
    });
    
    $routeProvider.when('/read',{
        controller:'ReadController',
        templateUrl:'lue.html'
    });
    
    $routeProvider.when('/write',{
        controller:'WriteController',
        templateUrl:'kirjoita.html'
    });
    
});





