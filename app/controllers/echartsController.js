(function () {
    'use strict';


app.controller('BarChartController', function ($scope,$http) {
    var array = [];

    $http({

        url: 'http://localhost:8080/ztmdm/getBugs/list',
        method: 'Post'

    }).then(function(data) {
        // alert(data.data.data.length);
        //alert弹框如果提示undefined，就使用浏览器的debug模式查看console.info(data)数据的层级，因为有时跟后端返回的json层级是一样的。
        //console.info(data.data.data.length);

        for(var i = 0; i < data.data.data.length; i++) {
            var temp={

                x:data.data.data[i].realname,y:data.data.data[i].count
            };

            array.push(temp);


        };


    }).catch(function (data) {
        alert("ajax error");
    });


    $scope.config = {

        title: {
            text: '柱状图',
            left: 'center'
        }

    };
    var xxx={name:'hhh',datapoints:array}
    $scope.data = [xxx];


});




})();