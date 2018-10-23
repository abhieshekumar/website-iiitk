angular.module("app",["ngRoute","ngAnimate","ngSanitize","oc.lazyLoad","ngProgress"])
                    .config(function ($routeProvider) {
                        $routeProvider.caseInsensitiveMatch=true;
                        $routeProvider
                            .when("/pdf/:toView/:file/:heading",{
                                title:'PDF Viewer | IIIT Kottayam',
                                templateUrl:function(){ return "views/pdf.html?time="+(new Date)},
                                controller:"pdfController",
                                controllerAs:"pdfCtrl",
                                resolve:{
                                    pdfCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'pdfCtrl',
                                            files:['scripts/controllers/pdf.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/home",{
                                title:"Welcome to IIIT Kottayam",
                                templateUrl:function(){ return "views/home.html?time="+(new Date)},
                                controller:"homeController",
                                controllerAs:"homeCtrl",
                                resolve:{
                                     homeCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'homeCtrl',
                                            files:['scripts/controllers/home.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/researchPublication",{
                                title:"Research Scholar | IIIT Kottayam",
                                templateUrl:function(){return "views/researchPublication.html?time="+(new Date)},
                                controller:"researchPublicationController",
                                controllerAs:"researchPublicationCtrl",
                                resolve:{
                                    researchPublicationCtrl: function($ocLazyLoad){
                                        return $ocLazyLoad.load({
                                            name:'researchPublicationCtrl',
                                            files:['scripts/controllers/researchPublication.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/sitemap",{
                                title:"Sitemap | IIIT Kottayam",
                                templateUrl:function(){return "views/sitemap.html?time="+(new Date)},
                                controller:"sitemapController",
                                controllerAs:"sitemapCtrl",
                                resolve:{
                                     homeCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'sitemapCtrl',
                                            files:['scripts/controllers/sitemap.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/students",{
                                redirectTo:"/students/batch15"
                            })
                            .when("/students/:tab",{
                                title:"Students | IIIT Kottayam",
                                templateUrl:function(){return "views/students.html?time="+(new Date)},
                                controller:"studentController",
                                controllerAs:"studentCtrl",
                                resolve:{
                                     studentCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'studentCtrl',
                                            files:['scripts/controllers/student.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/technical",{
                                title:"Technial | IIIT Kottayam",
                                templateUrl:function(){ return "views/technical.html?time="+(new Date)},
                                controller:"technicalController",
                                controllerAs:"technicalCtrl",
                                resolve:{
                                     facultyCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'technicalCtrl',
                                            files:['scripts/controllers/technical.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/faculty",{
                                title:"Faculty | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty.html?time="+(new Date)},
                                controller:"facultyController",
                                controllerAs:"facultyCtrl",
                                resolve:{
                                     facultyCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'facultyCtrl',
                                            files:['scripts/controllers/faculty.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })                            
                            .when("/academics",{
                                title:"Academics | IIIT Kottayam",
                                templateUrl:function(){return "views/academics.html?time="+(new Date)},
                                controller:"academicsController",
                                controllerAs:"academicsCtrl",
                                resolve:{
                                     academicsCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'academicsCtrl',
                                            files:['scripts/controllers/academics.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/admission",{
                                title:"Admission | IIIT Kottayam",
                                templateUrl:function(){return "views/admission.html?time="+(new Date)},
                                controller:"admissionController",
                                controllerAs:"admissionCtrl",
                                resolve:{
                                     academicsCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'admissionCtrl',
                                            files:['scripts/controllers/admission.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/administration",{
                                title:"Administration | IIIT Kottayam",
                                templateUrl:function(){return "views/administration.html?time="+(new Date)},
                                controller:"administrationController",
                                controllerAs:"administrationCtrl",
                                resolve:{
                                    administrationCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'administrationCtrl',
                                            files:['scripts/controllers/administration.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/about",{
                                title:"About | IIIT Kottayam",
                                templateUrl:function(){return "views/about.html?time="+(new Date)},
                                controller:"aboutController",
                                controllerAs:"aboutCtrl",
                                resolve:{
                                    administrationCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'aboutCtrl',
                                            files:['scripts/controllers/about.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/admin",{
                                title:"Administration | IIIT Kottayam",
                                templateUrl:function(){return "views/admin.html?time="+(new Date)},
                                controller:"adminController",
                                controllerAs:"adminCtrl",
                                resolve:{
                                     adminCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'adminCtrl',
                                            files:['scripts/controllers/admin.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/campus",{
                                redirectTo:"/campus/overview"
                            })
                            .when("/campus/:tab",{
                                title:"Campus | IIIT Kottayam",
                                templateUrl:function(){ return "views/campus.html?time="+(new Date)},
                                controller:"campusController",
                                controllerAs:"campusCtrl",
                                resolve:{
                                     campusCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'campusCtrl',
                                            files:['scripts/controllers/campus.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/career",{
                                title:"Career | IIIT Kottayam",
                                templateUrl:function(){return "views/career.html?time="+(new Date)},
                                controller:"careerController",
                                controllerAs:"careerCtrl",
                                resolve:{
                                     careerCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'careerCtrl',
                                            files:['scripts/controllers/career.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/events",{
                                title:"Events | IIIT Kottayam",
                                templateUrl:function(){return "views/events.html?time="+(new Date)},
                                controller:"eventsController",
                                controllerAs:"eventsCtrl",
                                resolve:{
                                     eventsCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'eventsCtrl',
                                            files:['scripts/controllers/events.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/contact",{
                                title:"Contact | IIIT Kottayam",
                                templateUrl:function(){ return "views/contact.html?time="+(new Date)},
                                controller:"contactController",
                                controllerAs:"contactCtrl",
                                resolve:{
                                     contactCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'contactCtrl',
                                            files:['scripts/controllers/contact.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/tenders",{
                                redirectTo:"/tenders/liveTenders"
                            })
                            .when("/tenders/:tab",{
                                title:"Tenders | IIIT Kottayam",
                                templateUrl:function() { return "views/tenders.html?time="+(new Date)},
                                controller:"tendersController",
                                controllerAs:"tendersCtrl",
                                resolve:{
                                     tendersCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'tendersCtrl',
                                            files:['scripts/controllers/tenders.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/placement",{
                                title:"Placement | IIIT Kottayam",
                                templateUrl:function(){return "views/placement.html?time="+(new Date)},
                                controller:"placementController",
                                controllerAs:"placementCtrl",
                                resolve:{
                                     placementCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'placementCtrl',
                                            files:['scripts/controllers/placement.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/researchScholar",{
                                title:"Research Scholar | IIIT Kottayam",
                                templateUrl:function(){return "views/researchScholar.html?time="+(new Date)},
                                controller:"researchScholarController",
                                controllerAs:"researchScholarCtrl",
                                resolve:{
                                     placementCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'researchScholarCtrl',
                                            files:['scripts/controllers/researchScholar.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/whyIIITK",{
                                title:"Why IIIT Kottayam",
                                templateUrl:function(){ return "views/why.html?time="+(new Date)},
                                controller:"whyIIITController",
                                controllerAs:"whyIIITCtrl",
                                resolve:{
                                     placementCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'whyIIITCtrl',
                                            files:['scripts/controllers/why.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/gallery/:user/:url/:title/:toView",{
                                title:"Gallery | IIIT Kottayam",
                                templateUrl:function(){return "views/gallery.html?time="+(new Date)},
                                controller:"galleryController",
                                controllerAs:"galleryCtrl",
                                resolve:{
                                     placementCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'galleryCtrl',
                                            files:['scripts/controllers/gallery.ctrl.js?time='+(new Date)]
                                        }) 
                                    }
                                }
                            })
                            .when("/news",{
                                title:"News | IIIT Kottayam",
                                templateUrl:function(){ return "views/news.html?time="+(new Date)},
                                controller:"newsController",
                                controllerAs:"newsCtrl",
                                resolve:{
                                    newsCtrl : function ( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'newsCtrl',
                                            files:['scripts/controllers/news.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/faculty/ebin",{
                                title:"Dr. Ebin Deni Raj | IIIT Kottayam",
                                templateUrl:function(){return "views/faculty/ebin.html?time="+(new Date)}
                            })
                            .when("/faculty/ranjithabraham",{
                                title:"Dr. Ranjit Abraham | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/ranjiththomas.html?time="+(new Date)}
                            })
                            .when("/faculty/renjith",{
                                title:"Dr. Renjith P | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/renjith.html?time="+(new Date)}
                            })
                            .when("/faculty/mani",{
                                title:"Mr. Manikandan V.M. | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/mani.html?time="+(new Date)}
                            })
                            .when("/faculty/arun",{
                                title:"Dr. Arun Cyril Jose | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/arun.html?time="+(new Date)}
                            })
                            .when("/faculty/panchami",{
                                title:"Dr. Panchami V | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/panchami.html?time="+(new Date)}
                            })
                            .when("/faculty/bini",{
                                title:"Dr. Bini A. A. | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/bini.html?time="+(new Date)}
                            })
                            .when("/faculty/bakky",{
                                title:"Dr. Bakkyaraj Thangarasu | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/bakky.html?time="+(new Date)}
                            })
                            .when("/faculty/jaise",{
                                title:"Dr. Jaise Jose | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/jaise.html?time="+(new Date)}
                            })
                            .when("/faculty/shajulin",{
                                title:"Dr. Shajulin Benedict | IIIT Kottayam",
                                templateUrl:function(){ return "views/faculty/shajulin.html?time="+(new Date)},
                                controller:"shajulinController",
                                controllerAs:"shajulinCtrl",
                                resolve:{
                                    shajulinCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'shajulinCtrl',
                                            files:['scripts/controllers/shajulin.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }                                
                            })
                            .when("/culturalClub",{
                                title:"Cultural Club | IIIT Kottayam",
                                templateUrl:function(){ return "views/culturalClub.html?time="+(new Date)},
                                controller:"culturalClubController",
                                controllerAs:"culturalClubCtrl",
                                resolve:{
                                    culturalClubCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'culturalClubCtrl',
                                            files:['scripts/controllers/culturalClub.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/socialClub",{
                                title:"Social Club | IIIT Kottayam",
                                templateUrl:function(){ return "views/socialClub.html?time="+(new Date)},
                                controller:"socialClubController",
                                controllerAs:"socialClubCtrl",
                                resolve:{
                                    socialClubCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'socialClubCtrl',
                                            files:['scripts/controllers/socialClub.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/sportsClub",{
                                title:"Sports Club | IIIT Kottayam",
                                templateUrl:function(){ return "views/sportsClub.html?time="+(new Date)},
                                controller:"sportsClubController",
                                controllerAs:"sportsClubCtrl",
                                resolve:{
                                    sportsClubCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'sportsClubCtrl',
                                            files:['scripts/controllers/sportsClub.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/codingClub",{
                                title:"Coding Club | IIIT Kottayam",
                                templateUrl:function(){ return "views/codingClub.html?time="+(new Date)},
                                controller:"codingClubController",
                                controllerAs:"codingClubCtrl",
                                resolve:{
                                    codingClubCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'codingClubCtrl',
                                            files:['scripts/controllers/codingClub.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .when("/antiragging",{
                                title:"Anti-Ragging | IIIT Kottayam",
                                templateUrl:function(){ return "views/antiRagging.html?time="+(new Date)},
                                controller:"antiRaggingController",
                                controllerAs:"antiRaggingCtrl",
                                resolve:{
                                    antiRaggingCtrl : function( $ocLazyLoad ){
                                        return $ocLazyLoad.load({
                                            name:'antiRaggingCtrl',
                                            files:['scripts/controllers/antiRagging.ctrl.js?time='+(new Date)]
                                        })
                                    }
                                }
                            })
                            .otherwise({
                                redirectTo:"/home"
                            })
                    })
                    .run(function($rootScope,$location,$window,$timeout,$route,ngProgressFactory){
                        $rootScope.progressbar = ngProgressFactory.createInstance();
                        var path = function() { return $location.path();};
                        var reload=false;       
                        $rootScope.tabDelay=10;
                        $rootScope.$on("$routeChangeStart",function(){
                            if(reload==true){
                                $rootScope.progressbar.setColor('#c51313');
                                $rootScope.progressbar.set('20');
                                $rootScope.progressbar.stop();
                            }else{
                                $rootScope.progressbar.setColor('#38b247');
                                $rootScope.progressbar.start();
                                reload=false;
                            }
                        })
                        $rootScope.$on("$routeChangeError",function(){
                            $timeout(function(){
                                $route.reload();
                                reload=true;
                            },2000);
                            $rootScope.progressbar.setColor('#c51313');
                            $rootScope.progressbar.set('20');
                            $rootScope.progressbar.stop();
                        })
                        $rootScope.$on("$routeChangeSuccess", function(event, current, previous){
                            reload=false;
                            $rootScope.progressbar.setColor('#38b247');
                            $rootScope.progressbar.complete();
                            $('html, body').animate({scrollTop: '0px'}, 0);
                            if (current.hasOwnProperty('$$route')) {
                                $rootScope.title = current.$$route.title;
                            }
                            var page=$location.$$url;
                            page = page.toString();
                            $window.ga('set','page',page);
                            $window.ga('send','pageview');
                        });
                        $rootScope.initializeTabs=function(){
                            var ele=$('#tabs');
                            if(typeof ele!==undefined){
                                var mc = new Hammer.Manager(document.getElementById('tabs'),{
                                    recognizers:[
                                        [Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]
                                    ]
                                });
                                mc.set({event:'swipe',threshold:0,velocity:0.01});
                                if (Math.ceil(ele.outerWidth()) < ele.prop('scrollWidth')) {
                                    //displaying arrowing
                                    $('.tabs-scroll').css('display','block');   //desktop arrows
                                    mc.on("swipeleft",function(){               //mobile swipe
                                        ele.animate({scrollLeft:'+=150'},200,'easeInOutQuad');
                                    })
                                    mc.on("swiperight",function(){          
                                        ele.animate({scrollLeft:'-=150'},200,'easeInOutQuad');
                                    })
                                    //auto-scroll to correct position on selecting a tab
                                    ele.tabs({onShow: function(tab){
                                        var relativeX = ele.offset().left - tab.offset().left;
                                    }});
                                }else{
                                    $('.tabs-scroll').css('display','none');
                                    mc.destroy();
                                }
                            }
                        }
                        $rootScope.scrollLeft=function(){
                            var ele=$('#tabs');
                            ele.animate({scrollLeft:'-=150'},200,'easeInOutQuad');
                        }
                        $rootScope.scrollRight=function(){
                            var ele=$('#tabs');
                            ele.animate({scrollLeft:'+=150'},200,'easeInOutQuad');
                        }
                    })