angular.module("app").controller("antiRaggingController",function($scope,$rootScope,$timeout){
                $scope.$on('$viewContentLoaded', function(event) {
                    $timeout(function(){
                        $scope.$apply(function(){
                            $rootScope.activeTab='';
                        });
                    },$rootScope.tabDelay);
                });
});