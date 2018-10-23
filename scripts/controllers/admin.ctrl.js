angular.module("app").controller("adminController",function($rootScope,$scope,$timeout){
                            var admin=[
                            {
                                name:'Prof. V.Ramakrishnan',
                                photo:'7EFAB7C2DCA2D6CF8013A0E735E60510.jpg',
                                designation:['Mentor-Director','Director IISER,TVM'],
                                contact:{
                                    email:'director@iisertvm.ac.in',
                                    phone:['0471-27780090','0471-2778009','0471-2597421']
                                }
                            },
                            {
                                name:'Shri M Radhakrishnan',
                                photo:'C57ACB1BBAB1B600E4FCB1A6863C3A21.jpg',
                                designation:['Registrar (Additional charge)','Registrar, IISER-TVM'],
                                contact:{
                                    email:'registrar@iisertvm.ac.in',
                                    phone:['+91 0471-2778004','2597459']
                                }
                            },
                            {
                                name:'Dr.M.P Rajan',
                                photo:'ebc6840e76699affa23d9c74f0f20016.jpg',
                                designation:['Dean(Academics)'],
                                contact:{
                                    email:'rajanmp@iisertvm.ac.in',
                                    phone:['0471-2778016','0471- 2778014','0471-2599411']
                                }
                            },
                            {
                                name:'Dr. Vennapusa Sivaranjana Reddy',
                                photo:'f35c72a62b050dc42782f4bc9df70878.jpeg',
                                designation:['Warden'],
                                contact:{
                                    email:'siva@iisertvm.ac.in',
                                    phone:['+91 (0) 471 - 2778057']
                                }
                            },
                            {
                                name:'Shri Satya Srinivas Naraharisetti',
                                photo:'default.jpg',
                                designation:['Officer In-Charge'],
                                contact:{
                                    email:'officerincharge@iiitkottayam.ac.in',
                                    phone:['+91-0471-2778031','+91-0471-2590498']
                                }
                            },
                            {
                                name:'Shri.Sivaprasad',
                                photo:'A130CDEA900B15E04DBDA3259928398B.jpg',
                                designation:['Accountant (Contract)'],
                                contact:{
                                    email:'sivaprasadps@iiitkottayam.ac.in',
                                    phone:['9400392583']
                                }
                            },
                            {
                                name:'Anjaly Subash',
                                photo:'9c88042339a892cf18fe132b9c777ac3.jpg',
                                designation:['Office Assistant (Contract)'],
                                contact:{
                                    email:'anjalysubash@iiitkottayam.ac.in',
                                    phone:['8547749725']
                                }
                            },
                            {
                                name:'Aneetta P Joseph',
                                photo:'4fbd0d7e682ba5b7bef920b5f03c1754.jpg',
                                designation:['Librarian (Contract)'],
                                contact:{
                                    email:'aneettapjoseph@iiitkottayam.ac.in',
                                    phone:['9847200087']
                                }
                            }];
                            var names=admin.map(x => x.name);
                            var jdata={};
                            names.forEach(function(value){
                                jdata[value]=null;
                            });
                            $scope.$on('$viewContentLoaded', function(event) {
                                $timeout(function(){
                                    $scope.$apply(function(){
                                        $rootScope.activeTab='admin';
                                    });
                                    $('input.autocomplete').autocomplete({
                                        data: jdata,
                                        limit: 3,
                                        onAutocomplete: function(val) {},
                                        minLength: 1
                                    });
                                },$rootScope.tabDelay);
                            });
                            this.adminAndStaff=admin;
                    })