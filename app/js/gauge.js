/**
 * Created by wangdongqiang on 2016/4/11.
 */
angular.module('chart-gauge', ['chart-directive'])
    .controller('chartGaugeCtrl', ['$scope','$interval', function($scope,$interval){
        $scope.option = {
            series:{
                name: '业务指标',
                data: {value: 45, name: '完成率'}
            }/*,
            backgroundColor: '#f5f5f5',         //背景颜色，默认无背景色
            saveAsImage: false*/                //是否显示“保存为图片”
        };

        //模拟动态数据
        $interval(function () {
            $scope.option = {
                series:{
                    name: '业务指标',
                    data: {
                        value: (Math.random() * 100).toFixed(2) - 0,
                        name: '完成率'
                    }
                }
            };
        },2000, 5);

        $scope.onGaugeClick = function(e){
            alert($scope.nodeInfo.name+"_"+$scope.nodeInfo.seriesName+" : "+ $scope.nodeInfo.value);
            console.table($scope.nodeInfo);
        }
    }])
;