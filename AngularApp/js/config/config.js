app.config(['$routeProvider' , function($routeProvider)
{

    $routeProvider
    .when('/' , {
        templateUrl: 'AngularApp/templates/mainPage.html',
        controller: 'mainController'
    })
    .otherwise({
        redirectTo: '/'
    })

}]);