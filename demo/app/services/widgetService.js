
app.service('widgetService',['$http','$q', function ($http,$q) {

    function getDirective(content, type){
        switch(content){
            case 'graph'    :   return '<nvd3-line-chart data="exampleLineData" margin="{left:40,top:10,bottom:30,right:10}" showXAxis="true" showYAxis="true" interactive="true"></nvd3-line-chart>';

            case 'array'    :   if(typeof(type) !== 'undefined'){
                                    if(type.indexOf('search') != -1)
                                        return '<my-array-display search="true"></my-array-display>';
                                    return '<my-array-display search="false"></my-array-display>';
                                }
            case 'image'    :   if(typeof(type) !== 'undefined')
                                    return '<img class="ImgBoxes" ng-src="images/'+type+'.jpg" alt="'+type+'"></img>';

            case 'map'      :   return '<leaflet center="center"></leaflet>';

            case 'chart'    :   return '<nvd3-pie-chart data="examplePieData" showLegend="true" margin="{left:0,top:0,bottom:0,right:0}" x="xFunction()" y="yFunction()" showLabels="true" pieLabelsOutside="true" showValues="true" labelType="percent"></nvd3-pie-chart>';

            default:            return '<p></p>';
        }
    }

    return({
        getDirective: getDirective
    });

}]);