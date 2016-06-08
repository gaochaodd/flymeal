var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'app/tpls/home.html'
                },
                'topbar@index': {
                    templateUrl: 'app/tpls/top-bar.html'
                },
                'indexcontent@index':{
                    templateUrl: 'app/tpls/index-content.html'
                },
                'bottombar@index' : {
                    templateUrl: 'app/tpls/bottom-bar.html'
                }
            }
        })
        .state('orderForm', {
            url: '/orderForm',
            templateUrl: 'app/tpls/orderForm.html',
            views : {
                '': {
                    templateUrl : 'app/tpls/orderForm.html'
                },
                'topbar@orderForm': {
                    templateUrl: 'app/tpls/top-bar.html'
                },
                'bottombar@orderForm' : {
                    templateUrl: 'app/tpls/bottom-bar.html'
                }
            }
        })
    .state('sellerDetail', {
        url: '/seller/:id',
        views: {
            '': {
                templateUrl : 'app/tpls/seller-detail.html'
            },
            'topbar@sellerDetail': {
                templateUrl: 'app/tpls/top-bar.html'
            },
            'bottombar@sellerDetail' : {
                templateUrl: 'app/tpls/bottom-bar.html'
            }
        }
    })
    //     .state('sellerDetail.menu',{
    //         url : '/seller/:id/menu',
    //         views:{
    //             'menu@sellerDetail' :{
    //                 templateUrl : 'app/tpls/menu'
    //             }
    //         }
    // })
})




routerApp.controller('sellerListCtrl' , ['$scope','$http', function($scope, $http) {
    $http ({
        method : 'GET' ,
        url : 'data/seller.json'
    }).success(function (data , status , headers , config){
        $scope.sellers = data;
    });
}]);


routerApp.directive('sellerList', function () {
        return{
            restrict: 'E',
            templateUrl :'app/tpls/seller.html',
            replace : true
            
        }
    });

routerApp.filter('payOnline',function() {
        return function (obj, _check) {
            var newObj;
            if (_check === false) {
                return obj;
            } else {
                newObj = obj.filter(function (item) {
                    return item.payOnline === true;
                });
                return newObj;
            }
        }
    })
