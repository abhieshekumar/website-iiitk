angular.module("app").controller("tendersController",function($scope,$rootScope,$timeout,$routeParams,$window){
                        var tab=($routeParams.tab)?$routeParams.tab:'livetenders';
                        tab=tab.toLowerCase();
                        var tenders=[
                            {
                                title:'Tender Notice for Providing Transport Services',
                                status:1,
                                lastDate:'08-10-2018',
                                links:[
                                    {
                                       text:"Tender",
                                       link:"tender_transport_2018_09_05",
                                       title:'Kitchen Tender'
                                    },
                                    {
                                        text:"Addendum",
                                        link:"tender_addendum_transport_2018_09_05",
                                        title:'Addendum'
                                    }
                                ]
                            },
                            {
                                title:"Quotation Notice for Purchase of Library Books",
                                status:2,
                                lastDate:'19-01-2018'
                            },
                            {
                                title:"Supply & Installation of Asterik based IP telephony solution",
                                status:2,
                                lastDate:'16-01-2018'
                            },
                            {
                                title:"Furnishing of Double Bedded Men's Hostel at IIIT Kottayam permanent campus",
                                status:2,
                                lastDate:'Unknown'
                            },
                            {
                                title:"Supply of Sports Items",
                                status:2,
                                lastDate:'14-11-2017'
                            },
                            {
                                title:"Quotation Notice for Purchase of Library Books",
                                status:2,
                                lastDate:'21-08-2017'
                            },
                            {
                                title:"Supply of Plastic Chairs",
                                status:2,
                                lastDate:'Unknown'
                            },
                            {
                                title:"Tender Notice for the supply of equipments to Electronics and Digital Labs",
                                status:2,
                                lastDate:'Jan-2017'
                            },
                            {
                                title:"Quotation Notice for purchase of materials for Lab Networking",
                                status:2,
                                lastDate:'Unknown'
                            },
                            {
                                title:"Quotation Notice for LCD Projector",
                                status:2,
                                lastDate:'Unknown'
                            },
                            {
                                title:"Quotation Notice for PA system",
                                status:2,
                                lastDate:'Unknown'
                            },
                            {
                                title:"Quotation Notice for Furniture",
                                status:2,
                                lastDate:'Unknown'
                            }
                        ];
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $('ul.tabs').tabs();
                                $('ul.tabs').tabs('select_tab', tab);
                                $scope.$apply(function(){
                                    $rootScope.activeTab='tenders/'+tab;
                                });
                                $('ul.tabs').on('click', function(e){
                                    var page = e.target.hash;
                                    page = page.replace('#','');
                                    $window.ga('set', 'page', '/tenders/'+page);
                                    $window.ga('send', 'pageview');
                                    $scope.$apply(function(){
                                        $rootScope.activeTab='tenders/'+page;
                                    });
                                });
                                $rootScope.initializeTabs();
                            },$rootScope.tabDelay);
                        });
                        this.tenders=tenders;
                        this.scrollRight=$rootScope.scrollRight;
                        this.scrollLeft=$rootScope.scrollLeft;
                    })