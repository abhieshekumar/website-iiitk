angular.module("app").controller("socialClubController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='socialClub';
            });
            $('.materialboxed').materialbox();
        },$rootScope.tabDelay);
    });                                           
})