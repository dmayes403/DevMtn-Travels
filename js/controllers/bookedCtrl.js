angular.module('devmtnTravel')
    .controller('bookedCtrl', function($scope, $http, mainSrv, $stateParams, $state){
      console.log($stateParams);
        $scope.booked = mainSrv.getLocation($stateParams.id)

        $scope.goToPackagesState = function(){
          $state.go('packages');
        }

        // $scope.goToPackagesState = function(id){
        //   $state.go('booked', {id: 112324}) //number can be replaced with $stateParams
        // }





        // $scope.bookedData = function($stateParams){
        //   for(var i = 0;i < allData.length; i++){
        //     if(allData[i].id === $stateParams){
        //       return allData[i];
        //     }
        //   }
        // }

        // $http({
        //     url: '../js/services/mainService.js',
        //     method: 'get',
        //     params: {id: $stateParams.id}
        // }).then(function(response){
        //   $scope.bookedData = response.data;
        // })
    })
