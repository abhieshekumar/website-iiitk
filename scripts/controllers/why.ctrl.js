angular.module("app").controller("whyIIITController",function($scope,$rootScope,$timeout){
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='whyIIIT';
                                });
                            },$rootScope.tabDelay);
                        });
                    })