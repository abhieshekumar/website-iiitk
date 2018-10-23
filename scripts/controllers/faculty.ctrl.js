angular.module("app").controller("facultyController",function($scope,$rootScope,$timeout){
                        var faculty =[
                            {
                                name:'Dr. M. P. Rajan',
                                designation:'Professor (Adjunct Professor from IISER-TVM)',
                                area:['Functional Analysis/Numerical Functional Analysis','Mathematical Finance/Financial Engineering','Parameter Identification in PDEs','Machine Learning','Data Science Research'],
                                contact:{
                                    email:'rajanmp@iisertvm.ac.in',
                                    phone:''
                                },
                                photo:'ebc6840e76699affa23d9c74f0f20016.jpg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'http://iisertvm.ac.in/faculties/rajanmp'
                                }
                            },
                            {
                                name:'Dr. Ebin Deni Raj',
                                designation:'Assistant Professor(Adhoc)',
                                area:['Online Social Network Analysis','Big Data Analytics','Sentimental Analysis','Social Media Analytics','Machine Learning','Data Science','Social Computing'],
                                contact:{
                                    email:'ebindeniraj@iiitkottayam.ac.in',
                                    phone:''
                                },
                                photo:'ebin.jpg',
                                more:{
                                    text:'Know more',
                                    link:'ebin',
                                    title:'Dr. Ebin Deni Raj'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/ebin'
                                }
                            },
                            {
                                name:'Dr. Vennapusa Sivaranjana Reddy',
                                designation:'Assistant Professor (Adjunct faculty from IISER-TVM)',
                                area:['Theoretical and Computational Chemistry'],
                                contact:{
                                    email:'siva@iisertvm.ac.in',
                                    phone:'+91 (0) 471 - 2599650'
                                },
                                photo:'f35c72a62b050dc42782f4bc9df70878.jpeg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'http://iisertvm.ac.in/faculties/siva.phpx'
                                }
                            },
                            {
                                name:'Dr. Bikas C. Das',
                                designation:'Assistant Professor (Adjunct faculty from IISER-TVM)',
                                area:['Novel Charge Transfer Composite Nanomaterials Based Thin Film Device Applications'],
                                contact:{
                                    email:'bikas@iisertvm.ac.in',
                                    phone:'+91 (0) 471 - 2778071'
                                },
                                photo:'D3AC7FE44CA63D5E0C6DFF0FF3FCC1C4.jpg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'http://iisertvm.ac.in/faculties/bikas.phpx'
                                }
                            },
                            {
                                name:'Dr. Gopakumar G',
                                designation:'Assistant Professor (Adjunct faculty from NIT Calicut)',
                                area:['Bioinformatics'],
                                contact:{
                                    email:'gopakumarg@nitc.ac.in',
                                    phone:''
                                },
                                photo:'7bbdc47907546604e0e8949c8ea52db3.jpeg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'http://people.cse.nitc.ac.in/gopakumar'
                                }
                            },
                            {
                                name:'Dr. Shajulin Benedict',
                                designation:'Assistant Professor(Adhoc)',
                                area:['Cloud Computing','IoT','Supercomputers','Tools','Parallel Compilers'],
                                contact:{
                                    email:'shajulin@iiitkottayam.ac.in',
                                    phone:''
                                },
                                photo:'shajulin.jpg',
                                more:{
                                    text:'Know more',
                                    link:'shajulin',
                                    title:'Dr. Shajulin Benedict'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/shajulin'
                                }
                            },
                            {
                                name:'Dr. Sasikumaran Sreedharan',
                                designation:'Assistant Professor (Adjunct faculty)',
                                area:['Real Time Systems','Software Quality','Sensor Networks and Quality','Education Management'],
                                contact:{
                                    email:'sasi_kumaran@hotmail.com',
                                    phone:''
                                },
                                photo:'sasikumaran.jpg',
                                more:{
                                    text:'Know more',
                                    link:'sasikumaran',
                                    title:'Dr. Sasikumaran Sreedharan'
                                }
                            },
                            {
                                name:'Dr. Bini A. A.',
                                designation:'Assistant Professor',
                                area:['Signal Processing','Image Processing','Computer Vision','Applied Electromagnetics'],
                                contact:{
                                    email:'bini@iiitkottayam.ac.in',
                                    phone:''
                                },
                                photo:'bini.JPG',
                                more:{
                                    text:'Know more',
                                    link:'bini',
                                    title:'Dr. Bini A. A.'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/bini'
                                }
                            },
                            {
                                name:'Dr. S. Vinaya Kumar',
                                designation:'Assistant Professor (Adjunct faculty)',
                                area:['English Language'],
                                contact:{
                                    email:'aparvin@gmail.com',
                                    phone:''
                                },
                                photo:'vinaya.jpg',
                                more:{
                                    text:'Know more',
                                    link:'vinaya',
                                    title:'Dr. S. Vinaya Kumar'
                                }
                            },
                            {
                                name:'Dr. Guram Donadze',
                                designation:'Assistant Professor (Adjunct faculty from IISER,Tvm)',
                                area:['Homological Algebra',' Commutative Algebra'],
                                contact:{
                                    email:'donadzeg@iisertvm.ac.in',
                                    phone:''
                                },
                                photo:'1E40FDC1F1AB327839C3543A62C6AE82.png',
                                more:{}
                            },
                            {
                                name:'Dr. Viji Z. Thomas',
                                designation:'Assistant Professor (Adjunct faculty from IISER,Tvm)',
                                area:['Group Theory','Commutative Algebra','Homological Algebra'],
                                contact:{
                                    email:'vthomas@iisertvm.ac.in',
                                    phone:''
                                },
                                photo:'D4D022865C0BFA31B05F742E5BE99E55.png',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'http://iisertvm.ac.in/faculties/vthomas.phpx'
                                }
                            },
                            {
                                name:'Dr. P. Devaraj',
                                designation:'Associate Professor (Adjunct faculty from IISER,Tvm)',
                                area:['Harmonic Analysis Sampling',' Reconstruction Wavelet Analysis',' Applied Cryptography'],
                                contact:{
                                    email:'devarajp@iisertvm.ac.in',
                                    phone:''
                                },
                                photo:'c71d9b53aff5c07bfcc8a6fbd491608e.jpg',
                                more:{}
                            },
                            {
                                name:'Dr. Antony Palackal',
                                designation:'Assistant Professor (Adjunct faculty)',
                                area:['Sociology of Science and Development','Social Movements',' Cultural Dynamics and Gender and Society'],
                                contact:{
                                    email:'antonypalackal@gmail.com',
                                    phone:''
                                },
                                photo:'1C36E2FE5DB85F8FECDC9C0C64700DA1.jpg',
                                more:{}
                            },
                            {
                                name:'Dr. Renjith P.',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Graph Theory','Design and Analysis of Graph Algoritms'],
                                contact:{
                                    email:'renjithp@iiitkottayam.ac.in',
                                    phone:''
                                },
                                photo:'944C76B56A7CAB522DEBDEECEC0CE8F8.jpg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/renjith'
                                }
                            },
                            {
                                name:'Dr. Bakkyaraj Thangarasu',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Nonlinear Differential Equations'],
                                contact:{
                                    email:'bakkyaraj@iiitkottayam.ac.in',
                                    phone:''
                                },
                                photo:'7BEAA1E0E47C4DD4D7E44D98B2B85388.jpg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/bakky'
                                }
                            },
                            {
                                name:'Dr. Jaise Jose',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Numerical Functional Analysis'],
                                contact:{
                                    email:'jaise@iitkottayam.ac.in',
                                    phone:'+91 (0) 471 - 2778310'
                                },
                                photo:'jaise.jpg',
                                more:{},
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/jaise'
                                }
                            },
                            {
                                name:'Dr. Arun Cyril Jose',
                                designation:'Assistant Professor (Adhoc)',
                                area:['Smart Home Security','Device Fingerprinting','Logical Sensing from a Security Point of View','Behaviour Prediction from a Security Point of View','Different Surveillance Techniques','Security Based Social Engineering','Completely Anonymous Communication Over the Internet'],
                                contact:{
                                    email:'aruncyril at iiitkottayam dot ac dot in',
                                    phone:'0471-2778319'
                                },
                                photo:'arun.jpg',
                                more:{
                                    text:'Know more',
                                    link:'arun',
                                    title:'Arun Cyril Jose'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/arun'
                                }
                            },
                            {
                                name:'Dr. Manikandan V. M.',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Digital Image Watermarking', 'Reversible Data Hiding', 'Digital Image Forensics'],
                                contact:{
                                    email:'manikandan@iiitkottayam.ac.in',
                                    phone:'+91 (0) 471 - 2778316'
                                },
                                photo:'Manikandan.jpg',
                                more:{
                                    text:'Know more',
                                    link:'Manikandan',
                                    title:'Dr. Manikandan V. M.'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/mani'
                                }
                            },
                            {
                                name:'Ms. Panchami',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Cryptography', 'Data Security'],
                                contact:{
                                    email:'panchamam036@gmail.com',
                                    phone:'+91 (0) 471 - 2778318'
                                },
                                photo:'panchami.jpg',
                                more:{
                                    text:'Know more',
                                    link:'panchami',
                                    title:'Panchami V.'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/panchami'
                                }
                            },
                            {
                                name:'Dr. Ranjit Thomas Abraham',
                                designation:'Assistant Professor (Adhoc faculty)',
                                area:['Information and Communicaion Engineering','Machine Learning'],
                                contact:{
                                    email:'ranjit.abraham@gmail.com',
                                    phone:'+91 (0) 471 - 2778315'
                                },
                                photo:'Ranjit.jpeg',
                                more:{
                                    text:'Know More',
                                    link:'Ranjit',
                                    title:'Ranjit Thomas Abraham'
                                },
                                page:{
                                    text:'Visit Page',
                                    link:'#!faculty/ranjithabraham'
                                }
                            }
                        ];
                        var names=faculty.map(x => x.name);
                        var jdata={};
                        names.forEach(function(value){
                            jdata[value]=null;
                        });
                        this.faculties=faculty; 
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='faculty';
                                });
                                $('input.autocomplete').autocomplete({
                                    data: jdata,
                                    limit: 3,
                                    onAutocomplete: function(val) {},
                                    minLength: 1
                                });
                            },$rootScope.tabDelay);
                        });
                    })