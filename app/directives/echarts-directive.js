/**
 * Created by mxy on 2017/12/11.
 */
angular.module('echarts-directive', [])
    .directive('chartLine', function(){
        return {
            restrict: 'EA',
            replace: true,
            template: '<div id="chart-line">something wrong, hard to build Chart-Line</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&lineClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                 elem = elem[0];

                var resizeMainContainer = function () {
                    elem.style.width = '200'+'%';
                    elem.style.height = '200'+'%';

                };
                //设置div容器高宽
                resizeMainContainer();

                    /** 设置canvas尺寸*/
               //setSize(elem);

                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function() {
                    if (scope.origin === 'true') {
                        angular.extend(_option, scope.option);
                    } else {
                        /**组织参数*/
                        _option = {
                            title: {
                                text: scope.option.title || '',
                                subtext: scope.option.subtext || '',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: [],
                                right: 10,
                                top: 30
                            },
                            grid: {
                                left: '3%',
                                top: '20%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            width:'auto',
                            height: 'auto',
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: scope.option.xAxis || []
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: []
                        };

                        /**组织legend和series数据*/
                        var series = scope.option.series;
                        for (var i = 0; i < series.length; i++) {
                            _option.legend.data[i] = series[i].name;

                            _option.series[i] = {
                                name: series[i].name,
                                type: 'line',
                                data: series[i].data
                            }
                        }
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartPie', function(){
        return {
            restrict: 'EA',
            replace: true,
            template: '<div id="chart-pie">something wrong, hard to build Chart-pie</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&pieClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];
                var resizeMainContainer = function () {
                    elem.style.width = window.innerWidth*0.2+'px';
                    elem.style.height = window.innerHeight*0.5+'px';
                };
                //设置div容器高宽
                resizeMainContainer();
                /** 设置canvas尺寸*/
                // setSize(elem);

                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function() {
                    if (scope.origin === 'true') {
                        angular.extend(_option, scope.option);
                    } else {
                        /**组织参数*/
                        _option = {
                            title: {
                                text: scope.option.title || '',
                                subtext: scope.option.subtext || '',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                top: 30,
                                data: []
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            series: [
                                {
                                    name: scope.option.title || '',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: scope.option.series || [],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };

                        /**组织legend数据*/
                        _.forEach(scope.option.series, function (value, key) {
                            _option.legend.data[key] = value.name;
                        });
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartRing', function(){
        return {
            restrict: 'EA',
            replace: true,
            template: '<div id="chart-ring">something wrong, hard to build Chart-ring</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&ringClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];

                /** 设置canvas尺寸*/
                setSize(elem);

                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function() {
                    if (scope.origin === 'true') {
                        angular.extend(_option, scope.option);
                    } else {
                        /**组织参数*/
                        _option = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            legend: {
                                orient: 'vertical',
                                y: 'center',
                                right: 20,
                                data:[]
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            series: [
                                {
                                    name: scope.option.name || '',
                                    type:'pie',
                                    radius: ['30%', '70%'],
                                    center: ['35%','50%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '20'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:scope.option.series || []
                                }
                            ]
                        };

                        /**组织legend数据*/
                        _.forEach(scope.option.series, function (value, key) {
                            _option.legend.data[key] = value.name;
                        });
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartBar', function(){
        return {
            restrict: 'EA',
            replace: true,
            template: '<div id="chart-bar">something wrong, hard to build Chart-bar</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&barClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];
                var resizeMainContainer = function () {
                    elem.style.width = window.innerWidth*0.2+'px';
                    elem.style.height = window.innerHeight*0.5+'px';
                };
                //设置div容器高宽
                resizeMainContainer();
                // setSize(elem);
                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function() {
                    if (scope.origin === 'true') {
                        angular.extend(_option, scope.option);
                    } else {
                        /**组织参数*/
                        _option = {
                            tooltip: {
                                trigger: 'axis'
                            },
                            grid: {
                                left: '3%',
                                top: '20%',
                                right: '4%',
                                bottom: '5%',
                                containLabel: true
                            },
                            toolbox: {
                                feature: {
                                    dataView: {show: true, readOnly: false},
                                    magicType: {show: true, type: ['line', 'bar']},
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            legend: {
                                data: [],
                                left: 'left'
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            xAxis: [
                                {
                                    type: 'category',
                                    data: scope.option.xAxis || []
                                }
                            ],
                            yAxis: scope.option.yAxis || [],
                            series: scope.option.series || []
                        };

                        /**组织legend数据*/
                        _.forEach(scope.option.series, function (value, key) {
                            _option.legend.data[key] = value.name
                        });
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartGauge', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            template: '<div id="chart-gauge">something wrong, hard to build Chart-gauge</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&gaugeClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];

                setSize(elem);
                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function(){
                    if(scope.origin === 'true'){
                        angular.extend(_option, scope.option);
                    }else {
                        /**组织参数*/
                        _option = {
                            tooltip : {
                                formatter: "{a} <br/>{b} : {c}%"
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            series: [
                                {
                                    name: scope.option.series.name || '',
                                    type: 'gauge',
                                    radius: '90%',
                                    detail: {formatter:'{value}%'},
                                    data: scope.option.series.data || {},
                                    detail:{
                                        offsetCenter: [0, '60%'],
                                        textStyle: {
                                            fontSize: '20'
                                        }
                                    }
                                }
                            ]
                        };
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartRadar', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            template: '<div id="chart-radar">something wrong, hard to build Chart-radar</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&radarClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];

                setSize(elem);
                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                scope.$watch('option', function(){
                    if(scope.origin === 'true'){
                        angular.extend(_option, scope.option);
                    }else {
                        /**组织参数*/
                        _option = {
                            title: {
                                text: scope.option.title || '',
                                x: 'left',
                                left: 10
                            },
                            tooltip: {},
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            legend: {
                                data: [],
                                right: 10,
                                top: 30
                            },
                            radar: {
                                shape: 'circle',
                                center: ['50%', '58%'],
                                radius: '65%',
                                nameGap: 8,
                                indicator: scope.option.indicator || []
                            },
                            backgroundColor: scope.option.backgroundColor || '',
                            series: [{
                                type: 'radar',
                                areaStyle: {normal: {}},
                                data : scope.option.series || []
                            }]
                        };

                        /**组织legend数据*/
                        _.forEach(scope.option.series, function (value, key) {
                            _option.legend.data[key] = value.name;
                        });
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })

    .directive('chartMap', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            template: '<div id="chart-Map">something wrong, hard to build Chart-Map</div>',
            scope: {
                origin: '@',
                option: '=',
                chartClick: '&mapClick',
                outputData: '='
            },
            link: function(scope, elem, attrs){
                elem = elem[0];

                setSize(elem);
                /** 初始化图形*/
                var chart = echarts.init(elem);
                var _option = {};

                //城市地理坐标
                var geoCoordMap = {
                    '上海': [121.4648,31.2891],
                    '东莞': [113.8953,22.901],
                    '东营': [118.7073,37.5513],
                    '中山': [113.4229,22.478],
                    '临汾': [111.4783,36.1615],
                    '临沂': [118.3118,35.2936],
                    '丹东': [124.541,40.4242],
                    '丽水': [119.5642,28.1854],
                    '乌鲁木齐': [87.9236,43.5883],
                    '佛山': [112.8955,23.1097],
                    '保定': [115.0488,39.0948],
                    '兰州': [103.5901,36.3043],
                    '包头': [110.3467,41.4899],
                    '北京': [116.4551,40.2539],
                    '北海': [109.314,21.6211],
                    '南京': [118.8062,31.9208],
                    '南宁': [108.479,23.1152],
                    '南昌': [116.0046,28.6633],
                    '南通': [121.1023,32.1625],
                    '厦门': [118.1689,24.6478],
                    '台州': [121.1353,28.6688],
                    '合肥': [117.29,32.0581],
                    '呼和浩特': [111.4124,40.4901],
                    '咸阳': [108.4131,34.8706],
                    '哈尔滨': [127.9688,45.368],
                    '唐山': [118.4766,39.6826],
                    '嘉兴': [120.9155,30.6354],
                    '大同': [113.7854,39.8035],
                    '大连': [122.2229,39.4409],
                    '天津': [117.4219,39.4189],
                    '太原': [112.3352,37.9413],
                    '威海': [121.9482,37.1393],
                    '宁波': [121.5967,29.6466],
                    '宝鸡': [107.1826,34.3433],
                    '宿迁': [118.5535,33.7775],
                    '常州': [119.4543,31.5582],
                    '广州': [113.5107,23.2196],
                    '廊坊': [116.521,39.0509],
                    '延安': [109.1052,36.4252],
                    '张家口': [115.1477,40.8527],
                    '徐州': [117.5208,34.3268],
                    '德州': [116.6858,37.2107],
                    '惠州': [114.6204,23.1647],
                    '成都': [103.9526,30.7617],
                    '扬州': [119.4653,32.8162],
                    '承德': [117.5757,41.4075],
                    '拉萨': [91.1865,30.1465],
                    '无锡': [120.3442,31.5527],
                    '日照': [119.2786,35.5023],
                    '昆明': [102.9199,25.4663],
                    '杭州': [119.5313,29.8773],
                    '枣庄': [117.323,34.8926],
                    '柳州': [109.3799,24.9774],
                    '株洲': [113.5327,27.0319],
                    '武汉': [114.3896,30.6628],
                    '汕头': [117.1692,23.3405],
                    '江门': [112.6318,22.1484],
                    '沈阳': [123.1238,42.1216],
                    '沧州': [116.8286,38.2104],
                    '河源': [114.917,23.9722],
                    '泉州': [118.3228,25.1147],
                    '泰安': [117.0264,36.0516],
                    '泰州': [120.0586,32.5525],
                    '济南': [117.1582,36.8701],
                    '济宁': [116.8286,35.3375],
                    '海口': [110.3893,19.8516],
                    '淄博': [118.0371,36.6064],
                    '淮安': [118.927,33.4039],
                    '深圳': [114.5435,22.5439],
                    '清远': [112.9175,24.3292],
                    '温州': [120.498,27.8119],
                    '渭南': [109.7864,35.0299],
                    '湖州': [119.8608,30.7782],
                    '湘潭': [112.5439,27.7075],
                    '滨州': [117.8174,37.4963],
                    '潍坊': [119.0918,36.524],
                    '烟台': [120.7397,37.5128],
                    '玉溪': [101.9312,23.8898],
                    '珠海': [113.7305,22.1155],
                    '盐城': [120.2234,33.5577],
                    '盘锦': [121.9482,41.0449],
                    '石家庄': [114.4995,38.1006],
                    '福州': [119.4543,25.9222],
                    '秦皇岛': [119.2126,40.0232],
                    '绍兴': [120.564,29.7565],
                    '聊城': [115.9167,36.4032],
                    '肇庆': [112.1265,23.5822],
                    '舟山': [122.2559,30.2234],
                    '苏州': [120.6519,31.3989],
                    '莱芜': [117.6526,36.2714],
                    '菏泽': [115.6201,35.2057],
                    '营口': [122.4316,40.4297],
                    '葫芦岛': [120.1575,40.578],
                    '衡水': [115.8838,37.7161],
                    '衢州': [118.6853,28.8666],
                    '西宁': [101.4038,36.8207],
                    '西安': [109.1162,34.2004],
                    '贵阳': [106.6992,26.7682],
                    '连云港': [119.1248,34.552],
                    '邢台': [114.8071,37.2821],
                    '邯郸': [114.4775,36.535],
                    '郑州': [113.4668,34.6234],
                    '鄂尔多斯': [108.9734,39.2487],
                    '重庆': [107.7539,30.1904],
                    '金华': [120.0037,29.1028],
                    '铜川': [109.0393,35.1947],
                    '银川': [106.3586,38.1775],
                    '镇江': [119.4763,31.9702],
                    '长春': [125.8154,44.2584],
                    '长沙': [113.0823,28.2568],
                    '长治': [112.8625,36.4746],
                    '阳泉': [113.4778,38.0951],
                    '青岛': [120.4651,36.3373],
                    '伦敦': [0.8,51.30],
                    '纽约': [-74,40.42],
                    '约翰内斯堡': [27.54,-26.08]
                };

                scope.$watch('option', function(){
                    if(scope.origin === 'true'){
                        angular.extend(_option, scope.option);
                    }else {
                        /**组织参数*/
                        _option = {
                            title : {
                                text: scope.option.title || '',
                                subtext: scope.option.subtext || '',
                                left: 'center',
                                textStyle : {
                                    color: '#fff'
                                }
                            },
                            tooltip : {
                                trigger: 'item'
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {
                                        show: scope.option.saveAsImage
                                    }
                                }
                            },
                            legend: {
                                orient: 'vertical',
                                top: 'center',
                                right: 20,
                                data:[],
                                textStyle: {
                                    color: '#fff'
                                },
                                selectedMode: 'single'
                            },
                            backgroundColor: scope.option.backgroundColor || '#404a59',     //背景颜色，默认无背景色
                            geo: {
                                map: scope.option.geo || 'world',
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                roam: true,
                                itemStyle: {
                                    normal: {
                                        areaColor: '#323c48',
                                        borderColor: '#404a59'
                                    },
                                    emphasis: {
                                        areaColor: '#2a333d'
                                    }
                                }
                            },
                            series: scope.option.series || []
                        };

                        /**组织legend数据*/
                        _.forEach(scope.option.series, function (value, key) {
                            _option.legend.data[key] = value[0];
                        });

                        /**组织series数据*/
                        geoCoordMap = angular.extend(geoCoordMap, scope.option.geoCoordMap);
                        var _color = scope.option.lineColor || [],
                            _series = [],
                            convertData = function (data) {
                            var res = [];
                            for (var i = 0; i < data.length; i++) {
                                var dataItem = data[i];
                                var fromCoord = geoCoordMap[dataItem[0].name];
                                var toCoord = geoCoordMap[dataItem[1].name];
                                if (fromCoord && toCoord) {
                                    res.push([{
                                        coord: fromCoord
                                    }, {
                                        coord: toCoord
                                    }]);
                                }
                            }
                            return res;
                        };

                        _option.series.forEach(function (item, i) {
                            _series.push({
                                    name: item[0],
                                    type: 'lines',
                                    zlevel: 1,
                                    effect: {
                                        show: true,
                                        period: 6,
                                        trailLength: 0.7,
                                        color: '#fff',
                                        symbolSize: 3
                                    },
                                    lineStyle: {
                                        normal: {
                                            color: _color[i],
                                            width: 0,
                                            curveness: 0.2
                                        }
                                    },
                                    data: convertData(item[1])
                                },
                                {
                                    name: item[0],
                                    type: 'lines',
                                    zlevel: 2,
                                    effect: {
                                        show: true,
                                        period: 6,
                                        trailLength: 0,
                                        symbol: scope.option.lineIcon,
                                        symbolSize: 15
                                    },
                                    lineStyle: {
                                        normal: {
                                            color: _color[i],
                                            width: 1,
                                            opacity: 0.4,
                                            curveness: 0.2
                                        }
                                    },
                                    data: convertData(item[1])
                                },
                                {
                                    name: item[0],
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    zlevel: 2,
                                    rippleEffect: {
                                        brushType: 'stroke'
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'right',
                                            formatter: '{b}'
                                        }
                                    },
                                    symbolSize: function (val) {
                                        return val[2] / 8;
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: _color[i]
                                        }
                                    },
                                    data: item[1].map(function (dataItem) {
                                        return {
                                            name: dataItem[1].name,
                                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                                        };
                                    })
                                });
                        });
                        _option.series = _series;
                    }

                    //渲染图表
                    chart.setOption(_option);
                });

                //处理回调事件
                chartEvent(chart, _option, scope);
            }
        }
    })
;

/** 设置canvas尺寸*/
function setSize(elem){
    $(elem).width(elem.parentElement.clientWidth);
    $(elem).height(elem.parentElement.clientHeight);

}

//渲染图表、处理回调事件
function chartEvent(chart, _option, scope){
    scope.outputData = scope.outputData || {};
    chart.on('click', function(node){
        angular.extend(scope.outputData, node);
        scope.chartClick();
    });
}