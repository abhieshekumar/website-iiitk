angular.module("app").controller("eventsController",function($scope,$rootScope,$timeout){
                        var upcoming=[
                            {
                                title:'SHS 2018',
                                description:'IIIT Kottayam observed Swachhata Hi Sewa (SHS 2018) on the precursor of 150th birth year of Mahatma Gandhi, and in the run up to 4th anniversary of Swachh Bharat',
                                photo:{
                                    file:'SHS18.jpg',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'28th October 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Swachhata%20Hi%20Seva%202018/SHS 2018/events'
                                    }
                                ]
                            },
                            {
                                title:'Pradhva 2018',
                                description:'The annual Sportsmeet held during the odd sememter to bring sportive spirit among students and make them feel the importance of physical health.',
                                photo:{
                                    file:'pradhva.jpg',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'15th - 18th September 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Pradhva%202k18/Sports Meet 2018/events'
                                    }
                                ]
                            },
                            {
                                title:'Independence Day 2018',
                                description:'Independence Day 2018',
                                photo:{
                                    file:'indep18.JPG',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'15th August 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Independence%20Day%202018/Independence Day 2018/events'
                                    }
                                ]
                            },
                            {
                                title:'Orientation 2018',
                                description:'The orientation for the freshmen of the academic year 2018 was organized to welcome them to the institute.',
                                photo:{
                                        file:'orientation18.jpg',
                                        posx:'top',
                                        posy:'center'
                                },
                                date:'06th April 2017',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Orientation%20Programme-2018/Orientation 2018/events'
                                    }
                                ]
                            },
                            {
                                title:'Computer Science and Vision',
                                description:'A detailed talk on computer science and computer vision was carried out by Dr. Ram Prasad Krishna Moorthy discussing the applications, scope and importance of the topic. The speaker is affiliated with Dublin City University.',
                                photo:{
                                        file:'vision.jpg',
                                        posx:'center',
                                        posy:'center'
                                },
                                date:'01st March 2017',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Internship%202018/Internship 2018/events'
                                    }                                    
                                ]
                            },
                            {
                                title:'Summer Internship 2018',
                                description:'Summer internship 2018 was organized in which students completed various projects under respective mentors.',
                                photo:{
                                    file:'internship.jpg',
                                    posx:'center',
                                    posy:'top'
                                },
                                date:'June 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Internship%202018/Internship 2018/events'
                                    }
                                ]
                            },
                            {
                                title:'IDY 2017',
                                description:'International Day of Yoga 2017 was celebrated in the institute where students performed various yogasana under the guidance of trained personnel.',
                                photo:{
                                    file:'yoga17.JPG',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'Unknown Date',
                                link:[
                                    {
                                        text:'Watch on YouTube',
                                        link:'https://www.youtube.com/watch?v=M6Rz1KS0Fdo',
                                        target:'_blank'
                                    }
                                ]
                            },
                            {
                                title:'Ek Bharat Shreshta Bharat',
                                description:'Competition is, in general, a contest or rivalry between two or more entities, organisms, animals, individuals, economic groups or social groups, etc., for group or social status, or for leadership and profit.',
                                photo:{
                                        file:'ekbharat.jpg',
                                        posx:'center',
                                        posy:'top'
                                    }
                                ,
                                date:'26th January 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/packiyarajan/IIITK%20Ek%20Bharat%20Shreshta%20Bharat/Ek Bharat Shreshta Bharat/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Sports Meet',
                                description:'The novel college experience for any student is incomplete without sports. In order to make sure that the body worked just as hard as the mind, a sports meet was conducted which was well received by the students.',
                                photo:{
                                        file:'sports18.jpg',
                                        posx:'center',
                                        posy:'center'
                                    }
                                ,
                                date:'2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/packiyarajan/IIITK%20Sports%20Meet%202018/Sports Meet 2018/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Constraint Creativity',
                                description:'Mr. Arun Narayanan, Chief Operating Officer, UST-Global talked about "Constraint Creativity: A systematic process for generating ideas." It provided great insight for the students.',
                                photo:
                                    {
                                        file:'constraint.jpg',
                                        posx:'center',
                                        posy:'center'
                                    }
                                ,
                                date:'25th January 2017',
                                link:[]
                            },
                            {
                                title:'Republic Day',
                                description:'Patriotism is not an emotion one can visibly express all the time. That is why we at IIIT-K never fail to miss any opportunity to celebrate our patriotism. Celebrations were held on 26th Jan with an irrevocable love for our country.',
                                photo:{
                                        file:'republic18.jpg',
                                        posx:'center',
                                        posy:'center'
                                    }
                                ,
                                date:'26th January 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/packiyarajan/IIIT%20Kottayam%20Republic%20Day%20%202018/Republic Day 2018/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Workshop on ARM',
                                description:'A two day workshop on ARM processors was organized at the institute.',
                                photo:{
                                    file:'ARM.jpg',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'22nd and 23rd March 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Workshop%20on%20ARM%20Processor/ARM Workshop/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Twaran',
                                description:'Students from the institute participated at the Inter IIIT sports meet held in Gwalior',
                                photo:{
                                    file:'twaran.jpg',
                                    posx:'center',
                                    posy:'15%'
                                },
                                date:'March 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Twaran-2018/Twaran 2018/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Cloud Computing Course',
                                description:'A course on cloud computing was conducted in collaboration with Prof. Dr. Michael Gerndt (TMU Germany)',
                                photo:{
                                    file:'cloudcomputing18.jpg',
                                    posx:'center',
                                    posy:'30%'
                                },
                                date:'March 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/Cloud-Computing-TMU-2018/Cloud Computing Course/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'Digital Disruption',
                                description:'IEEE - IIIT-K branch organized a Tech Talk on "Digital Disruption"',
                                photo:{
                                    file:'digitalDisruption.jpg',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'8th March 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/IEEE-digital-disruption-2018/Digital Disruption/events',
                                        target:'_self'
                                    }
                                ]
                            },
                            {
                                title:'IoT Workshop',
                                description:'A workshop on Internet of Things was conducted at the institute with Mr. Subin Kuttappan as the resource person.',
                                photo:{
                                    file:'IoT18.jpg',
                                    posx:'center',
                                    posy:'center'
                                },
                                date:'13th January 2018',
                                link:[
                                    {
                                        text:'Visit Gallery',
                                        link:'#!gallery/IIIT_Kottayam/IoT-Workshop-2018/IoT Workshop/events',
                                        target:'_self'
                                    }
                                ]
                            }
                        ];

                        var titles=upcoming.map(x => x.title);
                        var jdata={};
                        titles.forEach(function(value){
                            jdata[value]=null;
                        });
                        this.events=upcoming;
                        $scope.$on('$viewContentLoaded',function(event){
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='events';
                                    $('select').material_select();
                                    $('input.autocomplete').autocomplete({
                                        data: jdata,
                                        limit: 3,
                                        onAutocomplete: function(val) {},
                                        minLength: 1
                                    });
                                });
                            },$rootScope.tabDelay);
                        });
                    })