angular.module("app").controller("admissionController",function($rootScope,$scope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='admission';
            });
        },$rootScope.tabDelay);
    });
})