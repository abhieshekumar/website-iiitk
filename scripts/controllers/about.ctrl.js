angular.module("app").controller("aboutController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='about';
            });
        },$rootScope.tabDelay);
    });                                           
})