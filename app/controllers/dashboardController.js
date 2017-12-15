angular.module('app')

.controller('DashboardCtrl', ['$scope', '$timeout', '$compile', "graphService", "userService",
	function($scope, $timeout,$compile,graphService,userService) {
		//Options for Gridster system
		$scope.gridsterOptions = {
			margins: [20, 20],
			columns: 5,
			draggable: {
				handle: 'h3'

			},
            resizable: {
                enabled: true
            }
		};

		$scope.dispTypelist = false;
		$scope.ContentList = graphService.RecoverData();
		$scope.typeList = [""];

		$scope.graphContentList = graphService.RecoverDetailGraph();
		
		//For leaflet Details
		angular.extend($scope, {center: {lat: 45.783,lng: 3.083,zoom: 13}});

	 	//Data for piechart Exemple
	 	$scope.examplePieData = [{key: "One",y: 5},{key: "Two",y: 2},{key: "Three",y: 9},{key: "Four",y: 7},{key: "Five",y: 4},{key: "Six",y: 3},{key: "Seven",y: 9}];

	 	$scope.data = [
            {
                "name": "page.load",
                "datapoints": [
                    { "x": 2001, "y": 1012 },
                    { "x": 2002, "y": 1023 },
                    { "x": 2003, "y": 1045 },
                    { "x": 2004, "y": 1062 },
                    { "x": 2005, "y": 1032 },
                    { "x": 2006, "y": 1040 },
                    { "x": 2007, "y": 1023 },
                    { "x": 2008, "y": 1090 },
                    { "x": 2009, "y": 1012 },
                    { "x": 2010, "y": 1012 }
                ]
            }];
	 	//Data for Line Chart
 	 	$scope.exampleLineData = [{"key": "Series 1",
 			"values": [ [ 1 , 0] , [ 2 , -6.33] , [ 3 , -5.95] , [ 4 , -11.56] , [ 5 , -5.47] , [ 6 , 0.50] , [ 7 , -5.53] , [ 8 , -5.78] , [ 9 , -7.32] , [ 10 , -6.70] , [ 11 , 0.44] , [ 12 , 7.24] , [ 13 , 9.25] , [ 14 , 11.34] , [ 15 , 14.73] , [ 16 , 12.38] , [ 17 , 18.43] , [ 18 , 19.83] , [ 19 , 22.64]]
 		}];

		//for graphe purpose
	 	$scope.xFunction = function() {return function(d) {return d.key;};}
	 	$scope.yFunction = function() {return function(d) {return d.y;};}


		$scope.dashboards = userService.RecoverDashboard();

		//Clear all widget from dashboard
		$scope.clear = function() {
			$scope.dashboard.widgets = [];
		};

		//Add a new empty widget to the Dashboard
		$scope.addWidget = function() {
			$scope.dashboard.widgets.push({
				name: "New Widget",
				sizeX: 1,
				sizeY: 1,
			});
		};

		//Save the current dashboard in the 'mon dashboard' item
		$scope.save = function(){
			var widgets = JSON.parse(JSON.stringify($scope.dashboard.widgets));
			var length = Object.keys($scope.dashboards).length;
			if($scope.dashboards[length].name == "mon dashboard")
				$scope.dashboards[length] = { id:length, name:"mon dashboard", widgets:widgets};
			else{
				length++;
				$scope.dashboards[length] = { id:length, name:"mon dashboard", widgets:widgets};
			}
			userService.saveDashboard(widgets);
		}

		//To switch between Dashboard
		$scope.$watch('selectedDashboardId', function(newVal, oldVal) {
			if (newVal !== oldVal) {
				$scope.dashboard = $scope.dashboards[newVal];
			} else {//Should never happend ? 
				$scope.dashboard = $scope.dashboards[1];

			}
		});

		// choose the Dashboard '1' when first load.
		$scope.selectedDashboardId = '1';
	}])

.controller('CustomWidgetCtrl', ['$scope', '$modal',
	function($scope, $modal) {

		$scope.remove = function(widget) {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
		};

		$scope.openSettings = function(widget) {
			$modal.open({
				scope: $scope,
				templateUrl: 'app/template/widget_settings.html',
				controller: 'WidgetSettingsCtrl',
				resolve: {
					widget: function() {
						return widget;
					}
				}
			});
		};

	}
])

.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget', '$compile' ,
	function($scope, $timeout, $rootScope, $modalInstance, widget ) {
		$scope.widget = widget;

		$scope.form = {
			name: widget.name,
			sizeX: widget.sizeX,
			sizeY: widget.sizeY,
			col: widget.col,
			row: widget.row,
			content: widget.content,
		};

		$scope.$watch('form.content', function(newValue, oldValue) {
			if(typeof(newValue) !== 'undefined'){
				$scope.typeList = $scope.graphContentList[newValue];	
				$scope.dispTypelist = true;
			}
			else
				$scope.dispTypelist  = false;
		});

		$scope.sizeOptions = [{
			id: '1',
			name: '1'
		}, {
			id: '2',
			name: '2'
		}, {
			id: '3',
			name: '3'
		}, {
			id: '4',
			name: '4'
		}];

		$scope.dismiss = function() {
			$modalInstance.dismiss();
		};

		$scope.remove = function() {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
			$modalInstance.close();
		};

		$scope.submit = function() {
			angular.extend(widget, $scope.form);
			$modalInstance.close(widget);
		};
	}
])

// helper code
.filter('object2Array', function() {
	return function(input) {
		var out = [];
		for (i in input) {
			out.push(input[i]);
		}
		return out;
	}
});