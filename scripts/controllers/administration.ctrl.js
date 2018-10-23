angular.module("app").controller("administrationController",function($scope,$rootScope,$timeout){                        
                        var members=[
                            {
                                name:'Shri. Kewal Kumar Sharma',
                                contact:'Secretary, Department of Higher Education, MHRD',
                                designation:'Chairman'
                            },
                            {
                                name:'Smt. Nalini Netto',
                                contact:'Chief Secretary of Kerala',
                                designation:'Member'
                            },
                            {
                                name:'Shri. Rakesh Ranjan, Joint Secretary (ICC & TE)',
                                contact:'Department of Higher Education, MHRD',
                                designation:'Member'
                            },
                            {
                                name:'Smt. Darshana M. Dabral',
                                contact:'Joint Secretary & Financial Advisor',
                                designation:'Member'
                            },
                            {
                                name:'Shri. M. Sivasankar',
                                contact:'Department, Government of Kerala',
                                designation:'Member'
                            },
                            {
                                name:'	Smt. Tripti Gurha',
                                contact:'Director (TE), Department of Higher education',
                                designation:'Member'
                            },
                            {
                                name:'Prof. V. Ramakrishnan',
                                contact:'Director IISER, Thiruvananthapuram, Kerala',
                                designation:'Member'
                            },
                            {
                                name:'Prof. Babu Sebastian',
                                contact:'Vice Chancellor, MG University, Kerala',
                                designation:'Member'
                            },
                            {
                                name:'Shri. Chandrakumaran Nair',
                                contact:'Executive Director, CIAL, Kochi',
                                designation:'Member'
                            },
                            {
                                name:'Shri. Kamal K. Singh',
                                contact:'Rolta Foundation',
                                designation:'Member'
                            }                         
                        ];
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='administration';
                                });
                            },$rootScope.tabDelay);
                        });
                        this.members=members;
                    })