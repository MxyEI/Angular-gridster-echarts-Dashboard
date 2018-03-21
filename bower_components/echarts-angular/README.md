# echarts-angular

## 简介
> angular directive for ECharts(基于AngularJS的echarts指令)

## 快速链接
- [文档](https://github.com/twp0217/echarts-angular/wiki)

## 环境
- AngularJS >=1.2.0
- ECharts >=3.4.0

## 安装

#### 安装依赖

```
bower install echarts-angular --save
```

#### 项目引入`echarts`、`angular`和`echarts-angular`

```
<script type="text/javascript" src="bower_components/echarts/dist/echarts.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/echarts-angular/dist/echarts-angular.min.js"></script>
```

#### 项目使用

- controller
```
var app = angular.module('app', ['echarts-angular']);
app.controller('demo', ['$scope', function($scope){
	$scope.option = {
		title: {
			text: 'ECharts 入门示例'
		},
		tooltip: {},
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}]
	};
}]);
```

- html

```
<div class="container" ng-controller="demo">
	<echarts-angular option="option"></echarts-angular>
</div>
```

## 支持

- 如果项目对你有帮助，请点颗星:star:
- 有问题，请提交 [issue](https://github.com/twp0217/echarts-angular/issues)
