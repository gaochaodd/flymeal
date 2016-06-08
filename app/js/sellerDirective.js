var sellerDirective = angular.module('sellerDirective',[sellerListService]);
sellerDirective.directive('sellerList', function () {
    return{
        restrict: 'E',
        templateUrl :'../tpls/seller.html'
    }


})
