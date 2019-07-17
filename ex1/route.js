(function () {
	
	var app = angular.module('app',["ngRoute"]);
	
	app.config(function ($routeProvider) {
		$routeProvider
			.when("/ex1", { 
				templateUrl1: "ex1.html",
				controller: "Ctrl1"
		})
	.otherwise({redirectTo:"/main"});
});