/**
 * Created by wangdongqiang on 2016/4/11.
 */
angular.module('chart-radar', ['chart-directive'])
    .controller('chartRadarCtrl', function($scope){
        $scope.option = {
            title: '基础雷达图',
            indicator: [
                { name: '销售', max: 6500},
                { name: '管理', max: 16000},
                { name: '信息技术', max: 30000},
                { name: '客服', max: 38000},
                { name: '研发', max: 52000},
                { name: '市场', max: 25000}
            ],
            series: [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配'
                },
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销'
                }
            ]/*,
            backgroundColor: '#f5f5f5',     //背景颜色，默认无背景色
            saveAsImage: false*/            //是否显示“保存为图片”
        };

        $scope.onRadarClick = function(){
            alert($scope.nodeInfo.name+"_"+$scope.nodeInfo.seriesName+" : "+ $scope.nodeInfo.value);
            console.table($scope.nodeInfo);
        }
    })
;