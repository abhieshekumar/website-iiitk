angular.module("app").controller("technicalController",function($rootScope,$scope,$timeout){
                            var technical=[
                            {
                                name:'Siju K. S.',
                                photo:'CCFCF763CC5C26EA83ED26635F647199.jpg',
                                designation:['Technical Assistant','Staff on Deputation(DTE, Kerala)'],
                                contact:{
                                    email:'sijuks@iiitkottayam.ac.in',
                                    phone:['9447765791']
                                }
                            },
                            {
                                name:'Chandrabose U. K.',
                                photo:'chandrabose.jpg',
                                designation:['Lab Assistant (Contract)'],
                                contact:{
                                    email:'chandru@iiitkottayam.ac.in',
                                    phone:['9744015099']
                                }
                            },
                            {
                                name:'Manjula',
                                photo:'manjula.jpg',
                                designation:['Lab Assistant (Contract)'],
                                contact:{
                                    email:'manjula@iiitkottayam.ac.in',
                                    phone:['+91-471-2778313 (off)']
                                }
                            },
                            {
                                name:'Sneha S. Thomas',
                                photo:'sneha.jpg',
                                designation:['Lab Assistant (Contract)'],
                                contact:{
                                    email:'snehathomas@iiitkottayam.ac.in',
                                    phone:['+91-471-2778312 (off)']
                                }
                            }];
                            var names=technical.map(x => x.name);
                            var jdata={};
                            names.forEach(function(value){
                                jdata[value]=null;
                            });
                            $scope.$on('$viewContentLoaded', function(event) {
                                $timeout(function(){
                                    $scope.$apply(function(){
                                        $rootScope.activeTab='technical';
                                    });
                                    $('input.autocomplete').autocomplete({
                                        data: jdata,
                                        limit: 3,
                                        onAutocomplete: function(val) {},
                                        minLength: 1
                                    });
                                },$rootScope.tabDelay);
                            });
                            this.technical=technical;
                    })