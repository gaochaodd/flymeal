var sellerListService = angular.module('sellerListService', []);
sellerListService.controller('sellerListCtrl' , ['$scope','$http', function($scope, $http) {
    $http ({
        method : 'GET' ,
        url : 'data/seller.json'
    }).success(function (data , status , headers , config){
        $scope.sellers = data;
    });
}]);
