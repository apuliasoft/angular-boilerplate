'use strict';

// Declare app level module which depends on filters, and services
angular.module('angularBoilerplate', ['ui.bootstrap', 'angularBoilerplate.filters', 'angularBoilerplate.services', 'angularBoilerplate.directives', 'angularBoilerplate.controllers']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/index.html',
		controller : 'Index'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}]);
