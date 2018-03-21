angular.module('echarts-angular', [])
	.directive('echartsAngular', ['$window', function($window) {
		return {
			restrict: 'E',
			template: '<div></div>',
			scope: {
				theme: '@',
				option: '=',
				onInit: "&",
				onChange: "&"
			},
			link: function($scope, element, attrs) {
				// 配置项
				var DEFAULT_THEME = "default";
				var opts = {
					height: attrs.height || 400,
					width: attrs.width || 'auto'
				};
				var container = element.children()[0] || element[0];

				/**
				 * echarts初始化
				 * @param {Object} dom		实例容器
				 * @param {Object} theme	主题
				 * @param {Object} opts		附加参数
				 */
				var init = function(dom, theme, opts) {
					if(typeof echarts === 'undefined') {
						console.error('ECharts is missing');
						return;
					}
					$scope.chart = echarts.init(dom, theme || DEFAULT_THEME, opts);
					$scope.onInit() && $scope.onInit()($scope.chart);
				};
				/**
				 * 设置图表实例的配置项以及数据
				 * @param {Object} option	图表实例的配置项以及数据
				 */
				var setOption = function(option) {
					if($scope.chart && option) {
						$scope.chart.setOption(option);
						$scope.onChange() && $scope.onChange()(option);
					}
				}

				// 监听.初始化
				$scope.$watch(function() {
					return $scope.option;
				}, function(option) {
					setOption(option);
				});
				init(container, $scope.theme, opts);

				angular.element($window).bind('resize', function() {
					$scope.chart && $scope.chart.resize();
				});

				// 销毁
				$scope.$on('$destroy', function() {
					if($scope.chart) {
						$scope.chart.dispose();
						$scope.chart = null;
					}
				});
			}
		}
	}]);