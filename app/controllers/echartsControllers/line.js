/**
 * Created by mxy on 2017/12/8.
 */
app
    .controller('chartLineCtrl', function($scope){
        $scope.chartLineOption = {
            title: '访问来源统计',                        //标题
            xAxis: ['周一','周二','周三','周四','周五','周六','周日'],    //【必填】x轴数值
            series: [                                     //【必填】每条线在x轴对应处的值
                {
                    name: '直接访问',
                    data: [100, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    data: [200, 100, 901, 934, 1290, 1330, 1320]
                }
            ]/*,
            backgroundColor: '#f5f5f5',     //背景颜色，默认无背景色
            saveAsImage: false*/            //是否显示“保存为图片”
        };

        $scope.onLineClick = function(){
            alert($scope.nodeInfo.name+"_"+$scope.nodeInfo.seriesName+" : "+ $scope.nodeInfo.value);
            console.table($scope.nodeInfo);
        }
    })
;