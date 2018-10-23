angular.module("app").controller("careerController",function($scope,$rootScope,$timeout){
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='career';
                                });
                                $('.collapsible').collapsible();
                            },$rootScope.tabDelay);
                        });
                        var jobs=[
                            {
                                title:'Apply for various faculty positions',
                                status:'1',
                                description:'Application from eligible Indian Nationals with outstanding academic achievements, ability to establish a vibrant research programme, and with a passion for teaching are invited for various faculty positions at the institute.',
                                link:'http://www.iiitkottayam.ac.in/faculty_advertisement.php',
                                linktype:1, /*1 means web; 0 means pdf */
                                title:'Apply for Faculty Positions'
                            }
                        ]
                        this.jobs=jobs;
                    })