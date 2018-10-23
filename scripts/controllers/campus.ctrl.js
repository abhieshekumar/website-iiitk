angular.module("app").controller("campusController",function($rootScope,$scope,$timeout,$routeParams,$window){
                        var tab=($routeParams.tab)?$routeParams.tab:'overview';
                        tab=tab.toLowerCase()
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='campus/'+tab;
                                });
                                $('ul.tabs').tabs();
                                $('ul.tabs').tabs('select_tab',tab);
                                $('ul.tabs').on('click', function(e){
                                    var page = e.target.hash;
                                    page = page.replace('#','');
                                    $window.ga('set', 'page', '/campus/'+page);
                                    $window.ga('send', 'pageview');
                                    $scope.$apply(function(){
                                        $rootScope.activeTab='campus/'+page;
                                    });
                                });
                                $rootScope.initializeTabs();
                                $('.materialboxed').materialbox();
                            },$rootScope.tabDelay);
                        });
                        this.scrollRight=$rootScope.scrollRight;
                        this.scrollLeft=$rootScope.scrollLeft;
                    })