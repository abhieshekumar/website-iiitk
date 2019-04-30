angular.module("app").controller("magazineController",function($scope,$rootScope,$timeout,$window){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='magazine';
            });
        },$rootScope.tabDelay);
    });
})