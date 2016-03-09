(function() {

    var costController = function ($scope,$http,$state,dataService) {
      $scope.name="";
      $scope.description="";
      $scope.money="";
      $scope.addToSystem = function () {
        //dataService.addEntry($scope.name,$scope.description,$scope.money);
        var body = {
          name: $scope.name,
          description: $scope.description,
          money: $scope.money
        };
        var req = {
              method: 'POST',
              url: '/data',
              data: JSON.stringify(body)
        }; 
        $http(req).success(function(data, status) {
            console.log("Successfully save data");
            $state.go('home');         
          });       
      }

      $scope.setData = function () {
         var req = {
              method: 'GET',
              url: '/data',
        }; 
        $http(req).success(function(data, status) {
            console.log("Successfully get data");
            $scope.records = data;     
          });  
      }
    };

    costController.$inject = ['$scope','$http','$state','dataService'];

    angular.module('myApp')
      .controller('costController', costController);
    
    
}());