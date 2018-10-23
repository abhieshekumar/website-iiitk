angular.module("app").controller("contactController",function($scope,$http,$rootScope,$timeout){
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='contact';
                                });
                                $('.collapsible').collapsible();
                            },$rootScope.tabDelay);
                        });
                        $.getScript('https://platform.twitter.com/widgets.js');
                        $.getScript('https://apis.google.com/js/platform.js');
                        this.contact={};
                        var vm=this;
                        this.feedback=function(){
                            $http({
                                method:'POST',
                                url:'scripts/contact/submit.php',
                                data:$.param(this.contact),
                                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                            }).then(function mySuccess(response) {
                                $('.collapsible').collapsible('close', 0);
                                Materialize.toast('We have acknowledged your message', 5000, 'rounded');
                            }, function myError(response) {
                                Materialize.toast('Something went wrong', 3000, 'rounded');
                            });
                        }                                                 
                    })