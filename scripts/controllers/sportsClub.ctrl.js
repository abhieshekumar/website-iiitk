angular.module("app").controller("sportsClubController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='sportsClub';
            });
            $('.materialboxed').materialbox();
        },$rootScope.tabDelay);
    });                                           
})