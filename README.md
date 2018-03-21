博客地址：http://btorg.org

# 功能

自定义布局；
可拖拽、可伸缩资源框；
资源框配置栏选择添加类型，如echarts图表，表格，图片，地图等，内容为事先定义好的模版；
可保存资源框坐标信息和配置信息（内容）。

克隆到本地之后可直接打开index.html查看效果。（ps：已经把bower_components上传）

# 安装node js

bower需要安装node js支持，首先安装node js。

# 安装bower

npm install bower

# 安装依赖

bower install

# 效果

![查看效果图](http://imgmxy.oss-cn-beijing.aliyuncs.com/Blogimg/angular-gridster.png#shadow)

# 部分依赖文件
其他依赖文件请看index.html
```json
{
  "name": "angular-gridster-dashboard",
  "version": "1.0.0",
  "homepage": "http://btorg.org",
  "authors": [
    "1486157956@qq.com"
  ],
  "description": "Angular directives for Gridster.js and dashboard",
  "main": "lib/angular-gridster.js",
  "keywords": [
    "angular",
    "gridster",
    "directives",
    "dashboard"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "gridster": "~0.2.1",
    "jQuery": "~2.0.3",
    "angular":"1.2.9",
    "bootstrap": "~3.3.4",
    "angular-ui-router": "1.0.10",
    
    "angular-ui-bootstrap": "0.10.0",
    "angular-gridster": "*"

  }
}

```

# angular-gridster配置信息

bower install执行完后会出现bower_components文件夹，查看angular-gridster的官方英文readme，你会发现讲的很详细。

![ng-gridster](http://imgmxy.oss-cn-beijing.aliyuncs.com/Blogimg/nggridsterreadme.png#shadow)


dashboardController.js中可以自定义面板配置如是否可拖动、是否可伸缩、拖动手柄、面板默认大小等等。
想查看原生gridster效果请移步http://www.jq22.com/yanshi2145

这是angular-gridster配置信息

```
$scope.gridsterOptions = {
	columns: 6, // the width of the grid, in columns
	pushing: true, // whether to push other items out of the way on move or resize
	floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
	swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
	width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
	colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
	rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
	margins: [10, 10], // the pixel distance between each widget
	outerMargin: true, // whether margins apply to outer edges of the grid
	sparse: false, // "true" can increase performance of dragging and resizing for big grid (e.g. 20x50)
	isMobile: false, // stacks the grid items if true
	mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
	mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
	minColumns: 1, // the minimum columns the grid must have
	minRows: 2, // the minimum height of the grid, in rows
	maxRows: 100,
	defaultSizeX: 2, // the default width of a gridster item, if not specifed
	defaultSizeY: 1, // the default height of a gridster item, if not specified
	minSizeX: 1, // minimum column width of an item
	maxSizeX: null, // maximum column width of an item
	minSizeY: 1, // minumum row height of an item
	maxSizeY: null, // maximum row height of an item
	resizable: {
	   enabled: true,
	   handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
	   start: function(event, $element, widget) {}, // optional callback fired when resize is started,
	   resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
	   stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
	},
	draggable: {
	   enabled: true, // whether dragging items is supported
	   handle: '.my-class', // optional selector for drag handle
	   start: function(event, $element, widget) {}, // optional callback fired when drag is started,
	   drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
	   stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
	}
};

```

# echarts-angular配置信息

## bar图配置

<strong>默认option指令：</strong>
```
    < chart-bar option="option">< /chart-bar>
    <span class="text-danger">【必写属性】</span>默认option，参数有限，配置简单
```

<strong>scope中的数据：</strong>

```
    $scope.option = {
            xAxis: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        }
```

<strong>增强option指令：</strong>:
```
    < chart-bar option="option" origin="true">< /chart-bar>
    origin="true"则option可以是echarts bar支持的所有属性
```

scope中的数据：
    <a href="http://echarts.baidu.com/demo.html#mix-line-bar" target="_blank">参考官方文档</a>

响应点击事件指令：

```
    < chart-bar option="option" output-data="nodeInfo" bar-click="onBarClick();">< /chart-bar>
        bar-click="onBarClick();"： 自定义点击事件
        output-data="nodeInfo"： <span class="text-danger">【必写属性】</span>点击处的数据
```

<strong>scope中的数据：</strong>

```
    $scope.onPieClick = function(){
        console.table($scope.nodeInfo);
    }
```
    
如果legend数据太长导致内容重叠，提供三种建议方案：
        方案1. 增加图表显示区域的宽高；
        方案2. 将origin置为true，通过更全的参数调整渲染布局；
        方案3. 将legend隐藏，在图标DOM旁边自定义legendDOM。


本例子中添加echarts图表不会随着资源框的伸缩重绘canvas，这是因为echarts的canvas绘图取得宽高是父级容器的宽高去掉px或%，
这样我就得很麻烦的重写echarts指令集，我会在有业余时间的时候完善指令，有小伙伴愿意将完善后的代码提交的话也可以联系我，
热烈欢迎purchase，star更好。



不明白的或者发现错误可以联系我，欢迎吐槽。1486157956@qq.com