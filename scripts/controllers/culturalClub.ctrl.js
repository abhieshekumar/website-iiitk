angular.module("app").controller("culturalClubController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='culturalClub';
            });
        },$rootScope.tabDelay);
    });                                           
})