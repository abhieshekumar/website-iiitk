angular.module("app").controller("newsController",function($timeout,$scope,$rootScope){
                                $scope.$on('$viewContentLoaded', function(event) {
                                    $timeout(function(){
                                        $scope.$apply(function(){
                                            $rootScope.activeTab='home';
                                        });
                                         $('.collapsible').collapsible();
                                    },$rootScope.tabDelay);
                                });
                                var news=[
                                    {
                                        title:'Thathva 2018',
                                        status:1,
                                        description:'1st prize in event Amazed at Thathva<br>&nbsp;&nbsp;<small>2017BCS0021    GONDU SHIVAKRISHNA<br>&nbsp;&nbsp;2017BCS0017   DHARAVATHU NEEHARI NAIK</small><br><br>3rd prize in The Board Room event at Thathva<br>&nbsp;&nbsp;<small>2017BCS0026    JAINEEL FENAL DHARIA<br>&nbsp;&nbsp;2017BCS0056    SHUBHAM MISHRA<br>&nbsp;&nbsp;2017BCS0024    GUNJAN ASIT BAGDE<br>&nbsp;&nbsp;2017BCS0030    KONIDANA SAI MANOJ</small>'
                                    },
                                    {
                                        title:'Orientation Programme 2018',
                                        status:1,
                                        description:'The orientation for the freshmen of the academic year 2018 was organized to welcome them to the institute.',
                                        date:'',
                                        link:[
                                            {
                                                text:'Visit Gallery',
                                                link:'#!gallery/IIIT_Kottayam/Orientation%20Programme-2018/Orientation 2018/news'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Orientation Programme Reschedule',
                                        description:'The orientation program scheduled to be held on 02/08/2018 for the newly joined students has been postponed',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'#!pdf/news/003/Orientation Rescheduled'
                                            }
                                        ]
                                    },
                                    {
                                        title:'PI Reporting of the Candidates',
                                        description:'The PI reporting of the candidates has been extended',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'http://www.iiitkottayam.ac.in/2018admission.php'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Orientation Programme for Newly Joined Students',
                                        description:'Orientation programme for the freshmen',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'#!pdf/news/001/Orientation 2018'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Admission Schedule And Payment Of Fees',
                                        description:'Admission Schedule And Payment Of Fees - Special Round I & Round II - 2018 (B.Tech CSE)',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'http://www.iiitkottayam.ac.in/2018admission.php'
                                            }
                                        ]
                                    },
                                    {
                                        title:'List of Candidates Provisionally Selected for Ph.D Admission - Aug 2018',
                                        description:'Visit the list of students selected for Ph.D admission',
                                        date:'',
                                        link:[
                                            {
                                                text:'View List',
                                                link:'#!pdf/news/phd_aug_2018_selected/Selected Students'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Upcoming Campus',
                                        description:'Take a look at the work in progress',
                                        link:[
                                            {
                                                text:'Visit Gallery',
                                                link:'#!pdf/news/IIITK_Admission_v3/Upcoming Campus'
                                            }
                                        ]
                                    },
                                    {
                                        title:'2018 - Seat Allotment Details',
                                        description:'',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'https://josaa.nic.in/webinfocms/public/view.aspx?page=46'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Faculty Posistions at IIIT Kottayam',
                                        description:'Find out about the available faculty positions at IIIT Kottayam',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'http://www.iiitkottayam.ac.in/faculty_advertisement.php'
                                            }
                                        ]
                                    },
                                    {
                                        title:'CFP in a Special Issue - SCPE on IoT Cloud (IIIT Kottayam + TUM - Germany)',
                                        description:'',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'#!pdf/news/JournalSI-CFP-IIITKottayam/IoT Cloud'
                                            }
                                        ]
                                    },
                                    {
                                        title:'IIIT Kottayam Recognized as a Scientific and Industrial Research Organization',
                                        description:'IIIT Kottayam has been recognized as a Scientific and Industrial Research Organisation (SIRO) by the Department of Scientific and Industrial Research under the Scheme on Recognition of Scientific and Industrial Research Organisation (SIROs), 1988',
                                        date:'',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'#!pdf/news/IIITK-AcceptanceNotification/Acceptance Notification'
                                            }
                                        ]
                                    },
                                    {
                                        title:'BTech Admissions 2018-2019',
                                        description:'Visit the JoSAA site and enroll for admission in IIIT Kottayam',
                                        date:'',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'https://josaa.nic.in/webinfocms/public/view.aspx?page=46',
                                                target:'_blank'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Central Sector Interest Subsidy Scheme, 2009',
                                        description:'Central Sector Interest Subsidy Scheme (CSIS), 2009 has been approved for continuation upto 2019-2020. Visit the link for more information.',
                                        date:'',
                                        link:[
                                            {
                                                text:'Know More',
                                                link:'#!pdf/news/selection/Subsidy Scheme'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Ph.D Admission 2018',
                                        description:'List of selected candidates to appear for the written test/interview has been published. The exam dates are as follows :<ol><li>CSE on 6th July 2018</li><li>ECE and Mathematics on 9th July 2018</li></ol>',
                                        date:'',
                                        link:[
                                            {
                                                text:'Candidates for CSE',
                                                link:'#!pdf/news/phd2018_Shortlisted-List-CSE/PhD. CSE Candidates'
                                            },
                                            {
                                                text:'Candidates for Mathematics',
                                                link:'#!pdf/news/phd2018_Shortlisted-List-Maths/PhD. Maths Candidates'
                                            },
                                            {
                                                text:'Candidates for ECE',
                                                link:'#!pdf/news/phd2018_Shortlisted-List-ECE/PhD. ECE Candidates'
                                            },
                                        ]
                                    },
                                    {
                                        title:'Internship by Students',
                                        description:'List of all students who did internship in various companies/institutions/organizations',
                                        date:'',
                                        link:[
                                            {
                                                text:'View List',
                                                link:'#!pdf/news/Internshiplist/Internship List'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Education Loan',
                                        description:'Vidya Lakshmi Portal provides single window for students to access information about various loan schemes provided by banks and make applications for educational loans.',
                                        date:'',
                                        link:[
                                            {
                                                text:'Visit',
                                                link:'https://www.vidyalakshmi.co.in/Students/',
                                                target:'_blank'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Fee for Ph.D Programme 2018',
                                        description:'The tuition Fee is Rs. 20,000 per Semester<br>Hostel & mess charges to be paid for separately',
                                        date:'',
                                    },
                                    {
                                        title:'IIIT Kottayam at Indian IEEE Newsletter',
                                        description:'Indian Institue of Information Technology Kottayam gets a mention in IEEE Newsletter. Visit the pdf link on page 59 for more information.',
                                        date:'',
                                        link:[
                                            {
                                                text:'Visit',
                                                link:'http://ieeecs-madras.managedbiz.com/icnl/18q1/icnl-18q1.pdf',
                                                target:'_blank'
                                            }
                                        ]
                                    },
                                    {
                                        title:'Swachh Bharat Summer Internship',
                                        description:'Swachh Bharat Summer Internship is a 100 hour experiential Internship program (between 1st May and 31st July 2018) for college students.',
                                        date:'',
                                        link:[{
                                            text:'Visit',
                                            link:'https://sbsi.mygov.in/',
                                            target:'_blank'
                                        }]
                                    },
                                    {
                                        title:'Registration for the Odd Semester - 2018',
                                        description:'Registration for the Odd Semester 2018 (Aug-Nov)',
                                        date:'',
                                        status:0,
                                        link:[{
                                            text:'PDF',
                                            link:'#!pdf/news/sem_registration_2018/Semester Registration'
                                        }]
                                    },
                                    {
                                        title:'Pay Your Fees',
                                        description:'Pay the fees for the upcoming semester well in advance to avoid any last minute hustle',
                                        date:'',
                                        status:0,
                                        link:[{
                                            text:'Visit Link',
                                            link:'https://www.onlinesbi.com/prelogin/institutiontypedisplay.htm',
                                            target:'_blank'
                                        }]
                                    },
                                    {
                                        title:'Visit of the Honourable MoS to Campus',
                                        description:'Minister of State visited the campus',
                                        date:'',
                                        status:0,
                                        link:[{
                                            text:'View Gallery',
                                            link:'#!/gallery/packiyarajan/Inauguration%20of%20PSB%2009-10-2017/Visit of MoS/news'
                                        }]
                                    },
                                    {
                                        title:'IIIT PPP Act 2017',
                                        description:'"An Act to declare certain Indian Institutes of Information Technology established under public-private partnership as institutions of national importance, with a view to develop new knowledge in information technology and to provide manpower of global standards for the information technology industry and to provide for certain other matters connected with such institutions or incidental thereto."',
                                        date:'',
                                        status:0,
                                        link:[{
                                            text:'PDF',
                                            link:'#!pdf/news/iiit_ppp_act_2017/IIIT PPP Act'
                                        }]
                                    },
                                    {
                                        title:'IIIT Bill',
                                        description:'Rajya Sabha passes the Indian Institute of Information Technology Public Private Partnership Bill 2017',
                                        date:'',
                                        status:0,
                                        link:[
                                            {
                                                text:'Visit Link',
                                                link:'http://pib.nic.in/newsite/PrintRelease.aspx?relid=169181',
                                                target:'_blank'
                                            }
                                        ]
                                    }
                                ];
                                this.news=news;    
                            })