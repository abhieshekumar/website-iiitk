angular.module("app").controller("researchScholarController",function($scope,$rootScope,$timeout){
                                    var scholar=[
                                        {
                                            name:'C. S. Basil',
                                            photo:'basil6546ygfd.jpg',
                                            designation:['2018PHD11001','Research under people'],
                                            contact:{
                                                email:'csbasil@iiitkottayam.ac.in',
                                                phone:['9496826']
                                            }
                                        }
                                    ];

                                    var names=scholar.map(x => x.name);
                                    var jdata={};
                                    names.forEach(function(value){
                                        jdata[value]=null;
                                    });

                                    $scope.$on('$viewContentLoaded', function(event) {
                                        $timeout(function(){
                                            $scope.$apply(function(){
                                                $rootScope.activeTab='researchScholar';
                                            });
                                            $('input.autocomplete').autocomplete({
                                                data: jdata,
                                                limit: 3,
                                                onAutocomplete: function(val) {},
                                                minLength: 1
                                            });
                                        },$rootScope.tabDelay);
                                    });
                                    this.scholar=scholar;
                                });