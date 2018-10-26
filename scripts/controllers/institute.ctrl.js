angular.module("app").controller("instituteController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='institute';
            });
        },$rootScope.tabDelay);
    });                                           
})