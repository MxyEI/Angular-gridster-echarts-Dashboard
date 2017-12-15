
app.service('userService',['$http','$q', function ($http,$q) {

    /* Same as graphService. This shoud be part of a 'UserService' -> Allow to get Custom Widget depending on user */

    function getBaseDashboard(){
        return {
            1: {
                id: '1',
                name: '容器 1',
                widgets: [
                    {col: 0,row: 0,sizeY: 1,sizeX: 1,name: "Widget 1",id:0,content:"array"}, 
                    {col: 2,row: 0,sizeY: 1, sizeX: 1,name: "Widget 2",id:1,content:'map'}
                ]
            },
            2: {
                id: '2',
                name: '容器 2',
                widgets: [
                    {col: 1,row: 1,sizeY: 1,sizeX: 2,name: "Other Widget 1",id:0},
                    {col: 1,row: 3,sizeY: 1, sizeX: 1,name: "Other Widget 2",id:1}
                ]
            }
        };
    }

    //To Save the User configuration of Dashboard
    function saveDashboard(dashboard){
        console.log(dashboard.toSource());
        /*
        $http.get(serverURL+'/user/dashboard').
            then(function(data) {
                //sth
            }).catch(function(data) {
                alert('Impossible de sauvegarder le Dashboard');
            });
        */
    }

    //To get the User Dashboard Configuration
    function RecoverDashboard(){

        var base = getBaseDashboard();

        //I define static widget, here you shoud have a 
        /*
        $http.get(serverURL+'/user/dashboard').
            success(function(data) {
                //STh to do
            }).error(function(data) {
                alert('Impossible de récupéré les données du dashboard');
            });
        */
        var widgets = [{col:0, row:0, sizeY:1, sizeX:2, name:"Widget 1", id:0, content:"array", type:"tyre"}, {col:2, row:0, sizeY:1, sizeX:1, name:"Widget 2", id:1, content:"image", type:"whatever"}, {name:"New Widget", sizeX:2, sizeY:2, id:2, row:0, col:3, content:"map"}, {name:"New Widget", sizeX:3, sizeY:1, id:3, row:1, col:0, content:"graph"}, {name:"New Widget", sizeX:1, sizeY:1, id:4, row:2, col:0, content:"chart", type:"tyre"}, {name:"New Widget", sizeX:3, sizeY:2, id:5, row:2, col:1, content:"array", type:"tyre with searchTab"}, {name:"New Widget", sizeX:1, sizeY:1, id:6, row:2, col:4, content:"image", type:"whatever"}]


        var length = Object.keys(base).length;
        length++;
        base[length] = { id:length, name:"完整示例", widgets:widgets}; //WOW SAD ! Fix THIS

        return base;
    }

    return({
        saveDashboard: saveDashboard,
        RecoverDashboard: RecoverDashboard
    });

}]);