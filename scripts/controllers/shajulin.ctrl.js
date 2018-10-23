angular.module("app").controller("shajulinController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            //
        },$rootScope.tabDelay);
    });
    //$.getScript('http://labs.researcherid.com/mashlets?el=badgeCont173505&mashlet=badge&showTitle=false&className=a&rid=D-3429-2012&size=small');                      
})