'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['ui.bootstrap', 'app.filters', 'app.services', 'app.directives', 'app.controllers']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/index.html',
		controller : 'Index'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}]);
