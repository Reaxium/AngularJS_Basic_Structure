app.controller('mainController', function($scope, $timeout)
{
    $scope.loading = true;

    $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
    };

    $timeout( function()
    {
        $scope.loading = false;
    }, 2000 );

});