angular.module("app").controller("codingClubController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='codingClub';
            });
            $('.materialboxed').materialbox();
        },$rootScope.tabDelay);
    });                                           
})