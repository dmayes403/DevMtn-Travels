angular.module('devmtnTravel')
    .controller('locationCtrl', function($scope, mainSrv){
          $scope.locations = mainSrv.getLocations();
    })
