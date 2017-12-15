app.directive("myArrayDisplay", function () {
    return {
        restrict: 'AEC',
        templateUrl: 'app/template/MyArray.html',
        scope: {
            search:'@search'
            // Can additionally pass something in here
        },
        controller: function ($scope, myDataService) {
            $scope.sortType     = ''; // set the default sort type
            $scope.sortReverse  = true;  // set the default sort order
            $scope.searchFish   = '';     // set the default search/filter term
            $scope.dataTab = myDataService.getDataTab();
            $scope.dataTabTitle = myDataService.getDataTitle();
            $scope.searchtab = $scope.search;
        }
    }
});