angular.module("app").controller("sitemapController",function($scope,$rootScope,$timeout){
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab=' ';
                                });
                            },$rootScope.tabDelay);
                        });
                    })