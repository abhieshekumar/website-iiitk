angular.module("app").controller("academicsController",function($rootScope,$scope,$routeParams,$timeout,$window){
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='academics';
                                });
                            },$rootScope.tabDelay);
                        });
                    })