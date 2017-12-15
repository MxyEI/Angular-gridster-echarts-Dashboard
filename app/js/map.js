/**
 * Created by wangdongqiang on 2016/4/11.
 */
angular.module('chart-map', ['chart-directive'])
    .controller('chartMapCtrl', function($scope){
        $scope.option = {
            title : '模拟攻击~biu~biu~biu~~~',             //地图名称
            subtext: '让导弹再飞一会',          //地图副标题
            geo: 'world',               //地图范围
            lineColor: ['#e6551d', '#693'],     //每种动态数据的颜色
            //动态数据的箭头图标
            lineIcon: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            //【必填】主要数据
            series: [
                ['北京', [
                    [{name:'北京'}, {name:'上海',value:95}],
                    [{name:'北京'}, {name:'广州',value:90}],
                    [{name:'北京'}, {name:'南宁',value:70}],
                    [{name:'北京'}, {name:'拉萨',value:50}],
                    [{name:'北京'}, {name:'伦敦',value:30}],
                    [{name:'北京'}, {name:'纽约',value:20}],
                    [{name:'拉萨'}, {name:'上海',value:20}],
                    [{name:'北京'}, {name:'约翰内斯堡',value:10}]
                ]],
                ['渥太华', [
                    [{name:'渥太华'}, {name:'莫斯科',value:95}],
                    [{name:'渥太华'}, {name:'巴西利亚',value:90}],
                    [{name:'渥太华'}, {name:'新德里',value:80}],
                    [{name:'渥太华'}, {name:'堪培拉',value:70}],
                    [{name:'约翰内斯堡'}, {name:'莫斯科',value:70}],
                    [{name:'渥太华'}, {name:'约翰内斯堡',value:10}]
                ]]
            ],
            geoCoordMap: {
                '渥太华': [-75.43,45.25]
                ,'巴西利亚': [-47.56,-15.47]
                ,'莫斯科': [37,56]
                ,'新德里': [77.13,28.37]
                ,'堪培拉': [149.07,-35.17]
            }/*,    //城市地理坐标[东经，北纬]
            backgroundColor: '#f5f5f5',     //背景颜色，默认无背景色
            saveAsImage: false*/            //是否显示“保存为图片”
        };

        $scope.onMapClick = function(){
            alert($scope.nodeInfo.name+"_"+$scope.nodeInfo.seriesName+" : "+ $scope.nodeInfo.value);
            console.table($scope.nodeInfo);
        }
    })
;