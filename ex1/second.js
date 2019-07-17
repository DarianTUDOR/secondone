(function () {
var app=angular.module('app',[]);
	
app.controller('sec',function sec($scope) {
	
		$scope.calculate = function(nr){
			$scope.nr=Math.sqrt(nr);
		};
		$scope.IsDisabled = false;
		
        $scope.ShowMessage = function () {
            $scope.IsDisabled = true;
		};
		
		
		$scope.address = 'Str. Vasile, nr. 24';
		
	});
}());