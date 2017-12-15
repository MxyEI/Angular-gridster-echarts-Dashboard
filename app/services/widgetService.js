
app.service('widgetService',['$http','$q', function ($http,$q) {

    function getDirective(content, type){
        switch(content){
            case 'echarts'  :
                if(typeof(type) !== 'undefined'){
                    if(type.indexOf('line') != -1){
                    return '<div ng-controller="chartLineCtrl" id="echartline" style="height: 100%;width: 100%;">\n' +
                '            <chart-line option="chartLineOption" line-click="onLineClick();" output-data="nodeInfo"></chart-line>\n' +
                '        </div>'}
                    if(type.indexOf('bar') != -1){
                        return '<div ng-controller="chartBarCtrl" style="height: 100%;width: 100%;"><chart-bar option="option" output-data="nodeInfo" bar-click="onBarClick();"></chart-bar></div>'
                    }
                    if(type.indexOf('pie') != -1){
                        return '<div ng-controller="chartPieCtrl" style="height: 100%;width: 100%;"><chart-pie option="option" pie-click="onPieClick();" output-data="nodeInfo"></chart-pie></div>'
                    }
                    return '<div ng-controller="chartBarCtrl" style="height: 100%;width: 100%;"><chart-bar option="option" output-data="nodeInfo" bar-click="onBarClick();"></chart-bar></div>'
                }
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