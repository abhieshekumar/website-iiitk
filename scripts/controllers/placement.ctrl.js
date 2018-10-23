angular.module("app").controller("placementController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='placement';
            });
        },$rootScope.tabDelay);
    });
    var recruiters=[
        {
            img:'bosch.jpg',
            company:'Bosch',
            location:'Bangalore, India'
        },
        {
            img:'TCS.png',
            company:'TCS',
            location:'Kochi, India'
        },
        {
            img:'NIWE.jpg',
            company:'NIWE',
            location:'Chennai, India'
        },
        {
            img:'IISc.png',
            company:'IISc',
            location:'Bangalore, India'
        },
        {
            img:'TMU.png',
            company:'Informatics',
            location:'TUM, Germany'
        }
    ];
    this.recruiters=recruiters;
})