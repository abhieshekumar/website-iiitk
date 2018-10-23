angular.module("app").controller("galleryController",function($scope,$routeParams,$sce){
                        this.embedUrl=$sce.trustAsResourceUrl('http://s1030.photobucket.com/user/'+$routeParams.user+'/embed/slideshow/'+$routeParams.url);
                        this.title=$routeParams.title;
                        this.toView=$routeParams.toView;
                        var gallery=[{
                                title:'Orientation 2018',
                                thumb:'data/images/gallery/orientation18.jpg',
                                link:'#!/gallery/IIIT_Kottayam/Orientation%20Programme-2018/Orientation%202018/'+this.toView
                            },
                            {
                                title:'Ek Bharat Shreshtha Bharat',
                                thumb:'data/images/gallery/ekbharat18.jpg',
                                link:'#!gallery/packiyarajan/IIITK%20Ek%20Bharat%20Shreshta%20Bharat/Ek Bharat Shreshta Bharat/'+this.toView
                            },
                            {
                                title:'Orientation 2017',
                                thumb:'data/images/gallery/orient17.jpg',
                                link:'#!gallery/packiyarajan/IIITK%20Orientation%20Program%202017/Orientation 2017/'+this.toView
                            },
                            {
                                title:'Sports Meet 2017',
                                thumb:'data/images/gallery/sports17.jpg',
                                link:'#!gallery/packiyarajan/IIITK%20Sports%20Meet%202017/Sports Meet 2017/'+this.toView
                            },
                            {
                                title:'Upcoming Campus',
                                thumb:'data/images/gallery/upcoming.png',
                                link:'#!gallery/packiyarajan/IIITK%20Upcomming%20Campus%20%20Aug%202017/Upcoming Campus/'+this.toView
                            },
                            {
                                title:'Visit of MoS',
                                thumb:'data/images/gallery/visitMOS.jpg',
                                link:'#!gallery/packiyarajan/Inauguration%20of%20PSB%2009-10-2017/Visit of MoS/'+this.toView
                            }
                        ];
                        this.gallery=gallery;
                     })