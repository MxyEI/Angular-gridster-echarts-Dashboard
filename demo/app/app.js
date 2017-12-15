app = angular.module('app', ['gridster', 'ui.bootstrap', 'ngRoute','nvd3ChartDirectives',"leaflet-directive"])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/dashboard', {
					templateUrl: 'app/template/view.html',
					controller: 'DashboardCtrl'
				})
				.otherwise({
					redirectTo: '/dashboard'
				});
		}
	])