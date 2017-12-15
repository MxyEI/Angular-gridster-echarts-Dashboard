/**
 * Created by mxy on 2017/12/8.
 */
app
    .controller('chartPieCtrl', function($scope){
        $scope.option = {
            title: '站点用户访问来源',                        //标题
            subtext: '每天3:00更新',                        //副标题
            series: [                                         //【必填】数据值
                {name:'邮件营销', value:100},
                {name:'直接访问', value:200},
                {name:'搜索引擎', value:300}
            ]/*,
            backgroundColor: '#f5f5f5',     //背景颜色，默认无背景色
            saveAsImage: false*/            //是否显示“保存为图片”
        };

        $scope.onPieClick = function(){
            alert($scope.nodeInfo.name+"_"+$scope.nodeInfo.seriesName+" : "+ $scope.nodeInfo.value);
            console.table($scope.nodeInfo);
        }
    })
;