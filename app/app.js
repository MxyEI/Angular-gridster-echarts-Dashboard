// app为此js的文件名
app = angular.module('app', ['gridster', 'ui.bootstrap', 'ngRoute','nvd3ChartDirectives',"leaflet-directive","chart-directive"])
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