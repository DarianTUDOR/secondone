(function () {
var app = angular.module('app',[]);

app.controller('Ctrl1', function Ctrl1(
$scope, github, $log, $anchorScroll, $location) {
	
	var complete = function(data) {
		$scope.user = data;
		github.getRepos($scope.user).then(onRepos);
	};
	
	var onRepos = function(data) {
		$scope.repos = data;
		$location.hash("userdetails");
		$anchorScroll();
	};
	
	$scope.search = function(username) {
		$log.info("Searching for " + username);
		github.getUser(username).then(complete);
	};
   
	
    $scope.message='User Details';
	$scope.repoSortOrder = 'name';
	
});
}());