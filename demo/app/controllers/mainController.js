app.controller('RootCtrl', function($scope) {
	$scope.$on('$locationChangeStart', function(e, next, current) {
		$scope.page = next.split('/').splice(-1);
	});
});