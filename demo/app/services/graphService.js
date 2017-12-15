
app.service('graphService',['$http','$q', function ($http,$q) {

    /* This shoud be part of a 'UserService' -> Allow to get Custom Widget depending on user */

    function RecoverData(){
        return ['array','graph','map','image','chart'] // I just use a static array. You should have
        /*

        $http.get(serverURL).
            success(function(data) {
                return data
            }).error(function(data) {
                alert('cant get fish data');
            });
*/
    }

    function RecoverDetailGraph(){

        return {
            'array': ['tyre with searchTab','tyre','sensor','whatever'],
            'graph': ['tyre','sensor','whatever'],
            'map':   ['tyre','sensor','whatever'],
            'image': ['whatever','whatever'],
            'chart': ['tyre','sensor','whatever']
        }
    }

    return({
        RecoverData: RecoverData,
        RecoverDetailGraph: RecoverDetailGraph
    });

}]);