
app.service('graphService',['$http','$q', function ($http,$q) {

    /* This shoud be part of a 'UserService' -> Allow to get Custom Widget depending on user */

    function RecoverData(){
        return ['echarts','array','graph','map','image','chart'] // I just use a static array. You should have
        /*

        $http.get(serverURL).
            then(function(data) {
                return data
            }).catch(function(data) {
                alert('cant get fish data');
            });
*/
    }

    function RecoverDetailGraph(){

        return {
            'echarts':['line','bar','pie'],
            'array': ['search','arr2','arr3','arr4'],
            'graph': ['g1','g2','g3'],
            'map':   ['m1','m2','m3'],
            'image': ['whatever','i2'],
            'chart': ['c1','c2','c3']
        }
    }

    return({
        RecoverData: RecoverData,
        RecoverDetailGraph: RecoverDetailGraph
    });

}]);