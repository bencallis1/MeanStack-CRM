'use strict';
angular.module('userApp', ['ngAnimate', 'routerApp','door3.css', 'postService','authService', 'mainCtrl','postCtrl', 'userCtrl', 'userService'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});