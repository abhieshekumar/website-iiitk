angular.module("app").controller("homeController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='home';
            });
        },$rootScope.tabDelay);
        $('.tooltipped').tooltip();
        $('.carousel.carousel-slider').carousel({fullWidth: true});
        function autoplay() {
            $('.carousel').carousel('next');
        setTimeout(autoplay, 8000);}
        autoplay();
        $('#sideEvents').css("height","350px");
        $('.slider').slider({transition:700,interval:8000,indicators:false});
        var carousel = $('#sideEvents').carousel();if (typeof window.ontouchstart !== 'undefined') {carousel.off('touchstart.carousel');}carousel.off('mousedown.carousel');
    });
    var newsList=[
        {
            text:'Hackicav 2018',
            link:'http://icentre.iiitkottayam.ac.in/hackicav18.html',
            new:1
        },
        {
            text:'DST-NIMAT Entrepreneurship Program',
            link:'http://icentre.iiitkottayam.ac.in/hackicav18.html',
            new:1
        },
        {
            text:'IIITK at Thathva 2018'
        },
        {
            text:'Recognition as Scientific and Industrial Research Organization by DSIR',
            link:'#!pdf/home/IIITK-AcceptanceNotification/Acceptance Notification'
        },
        {
            text:'Internships by Students',
            link:'#!pdf/home/Internship_list/Internship List'
        },
        {
            text:'Upcoming Campus',
            link:'#!gallery/packiyarajan/IIITK%20Upcomming%20Campus%20%20Aug%202017/Upcoming Campus/home'
        }
    ];
    this.additionalText=function(){
        $('#moreText').toggle(100);
        $('#showMore').toggle();
        $('#showLess').toggle();
    };
    this.newsList=newsList;
    var faculty=[
        {
            name:'Dr. Ebin Deni Raj',
            designation:'Assistant Professor (Adhoc)',
            area:['Social Network Analysis','Big Data Analytics','Sentimental Analysis','Social Media Analytics','Machine Learning','Data Science','Social Computing'],
            photo:'ebin.jpg'
        },
        {
            name:'Dr. Renjith P.',
            designation:'Assistant Professor (Adhoc)',
            area:['Graph Theory','Design &amp; Analysis of Graph Algorithms'],
            photo:'944C76B56A7CAB522DEBDEECEC0CE8F8.jpg'
        },
        {
            name:'Dr. Bini A. A.',
            designation:'Assistant Professor',
            area:['Signal Processing','Image Processing','Computer Vision','Applied Electromagnetics'],
            photo:'bini.JPG'
        },
        {
            name:'Dr. M. P. Rajan',
            designation:'Professor (Adjunct) from IISER-TVM',
            area:['Machine Learning','Data Science Research','Parameter Identification in PDEs','Functional Analysis/Numerical Functional Analysis','Mathematical Finance/Financial Engineering'],
            photo:'ebc6840e76699affa23d9c74f0f20016.jpg'
        },
        {
            name:'Dr. V. Sivaranjana Reddy',
            designation:'Assistant Professor (IISER-TVM)',
            area:['Theoretical and Computational Chemistry'],
            photo:'f35c72a62b050dc42782f4bc9df70878.jpeg'
        },
        {
            name:'Dr. Bikas C. Das',
            designation:'Assistant Professor (Adjunct faculty from IISER-TVM)',
            area:['Novel Charge Transfer Composite Nanomaterials Based Thin Film Device Applications'],
            photo:'D3AC7FE44CA63D5E0C6DFF0FF3FCC1C4.jpg'
        },
        {
            name:'Dr. Gopakumar G.',
            designation:'Assistant Professor (Adjunct faculty from NIT Calicut)',
            area:['Bioinformatics'],
            photo:'7bbdc47907546604e0e8949c8ea52db3.jpeg'
        },
        {
            name:'Dr. Sasikumaran Sreedharan',
            designation:'Assistant Professor (Adjunct faculty)',
            area:['Real Time Systems','Software Quality','Sensor Networks and Quality','Education Management'],
            photo:'sasikumaran.jpg'
        },
        {
            name:'Dr. S. Vinaya Kumar',
            designation:'Assistant Professor (Adjunct faculty)',
            area:['English Language'],
            photo:'vinaya.jpg'
        },
        {
            name:'Dr. Guram Donadze',
            designation:'Assistant Professor (Adjunct faculty from IISER-TVM)',
            area:['Homological Algebra',' Commutative Algebra'],
            photo:'1E40FDC1F1AB327839C3543A62C6AE82.png'
        },
        {
            name:'Dr. Viji Z. Thomas',
            designation:'Assistant Professor (Adjunct faculty from IISER-TVM)',
            area:['Group Theory','Commutative Algebra','Homological Algebra'],
            photo:'D4D022865C0BFA31B05F742E5BE99E55.png'
        },
        {
            name:'Dr. P. Devaraj',
            designation:'Associate Professor (Adjunct faculty from IISER-TVM)',
            area:['Harmonic Analysis Sampling',' Reconstruction Wavelet Analysis',' Applied Cryptography'],
            photo:'c71d9b53aff5c07bfcc8a6fbd491608e.jpg'
        },
        {
            name:'Dr. Antony Palackal',
            designation:'Assistant Professor (Adjunct faculty)',
            area:['Sociology of Science and Development','Social Movements',' Cultural Dynamics and Gender and Society'],
            photo:'1C36E2FE5DB85F8FECDC9C0C64700DA1.jpg'
        },
        {
            name:'Dr. Bakkyaraj Thangarasu',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Nonlinear Differential Equations'],
            photo:'7BEAA1E0E47C4DD4D7E44D98B2B85388.jpg'
        },
        {
            name:'Dr. Jaise Jose',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Numerical Functional Analysis'],
            photo:'jaise.jpg'
        },
        {
            name:'Dr. Arun Cyril Jose',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Smart Home Security','Device Fingerprinting','Logical Sensing from a Security Point of View','Behaviour Prediction from a Security Point of View','Different Surveillance Techniques','Security Based Social Engineering','Completely Anonymous Communication over the Internet'],
            photo:'arun.jpg'
        },
        {
            name:'Mr. Manikandan V. M.',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Digital Image Watermarking', 'Reversible Data Hiding', 'Digital Image Forensics'],
            photo:'Manikandan.jpg'
        },
        {
            name:'Ms. Panchami',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Cryptography', 'Data Security'],
            photo:'panchami.jpg'
        },
        {
            name:'Dr. Ranjit Thomas Abraham',
            designation:'Assistant Professor (Adhoc faculty)',
            area:['Information and Communicaion Engineering','Machine Learning'],
            photo:'Ranjit.jpeg'
        }
    ];

    var publication=[
        {
            title: "Flocking based Evolutionary Computation Strategy for measuring Centrality of Online Social Networks",
            authors:['L.D Dhinesh Babu', 'Ebin Deni Raj'],
            details: "Applied Soft computing,Volume 58, Pages 495-516, Elsevier,2017"
        },
        {
            title: "Detecting modular and granular overlaps in Online Social Networks using Fuzzy-ART",
            authors:['Ebin Deni Raj', 'L.D Dhinesh Babu'],
            details: "International journal of fuzzy systems, Volume 19, Issue 4, pp 1077–1092, Springer, 2017 "
        },
        {
            title: "A Firefly inspired Game Dissemination and QoS based Priority Pricing Strategy for Online Social Network Games",
            authors:['Ebin Deni Raj', 'L.D Dhinesh Babu.'],
            details: "International Journal of Bio-Inspired Computation, Indesrcience Publishers,2017 "
        },
        {
            title: "Image despeckling and deblurring via regularized complex diffusion",
            authors:['A. A. Bini'],
            details: "Signal, Image and Video Processing (Springer), Vol. 11, No. 6, pp.977-984, 2017"
        },
        {
            title: "Special Issue CFP on IoT Cloud Solutions for Societal Applications at Scalable Computing: Practice and Experience, Impact Factor Journal, 2019.",
            authors:['Shajulin Benedict', 'M.Gerndt']
        },
        {
            title: "Performance Improvement Options of Scientific Applications on XeonPhi KNL Architectures",
            authors:['Shajulin Benedict'],
            details: "Int. Journal of Knowledge, Engineering and Data Mining, Inderscience journals, 2018. (in press)"
        },
        {
            title: "Resource Allocation in Cloud Manufacturing using Bat Algorithm",
            authors:['Brintha N.C', 'Shajulin Benedict', 'Winolyn J.'],
            details: "International Journal of Manufacturing Technology and Management, Inderscience publishers, 2018."
        },
        {
            title: "SCALE-EA: A Scalability Aware Performance Tuning Framework for OpenMP Applications",
            authors:['Shajulin Benedict'],
            details: "Scalable Computing: Practice and Experience, Vol. 19, No.1, pp. 15-29, DOI 10.12694/scpe.v19i1.1390, (https://www.scpe.org/index.php/scpe/article/view/1390/525) 2018."
        },
        {
            title: "Monitoring IaaS using various cloud monitors, in Cluster Computing",
            authors:['A Stephen', 'Shajulin Benedict', 'RPA Kumar'],
            details: "Springer, pp. 1-13, 2018."
        },
        {
            title: "Towards Automatic Compiler-assisted Performance and Energy Modeling for Message Passing Parallel Programs",
            authors:['TF Philipp Gschwandtner', 'Alexander Hirsch', 'Shajulin Benedict'],
            details: "13th Workshop on Parallel Systems and Algorithms PASA 2018, Germany, 2018."
        },
        {
            title: "A survey on cloud-based solutions for cloud manufacturing",
            authors:['NC Brintha', 'Shajulin Benedict'],
            details: "International Journal of Computer Aided Engineering and Technology, Vol. 10, No.1-2, pp.126-140, 2018."
        },
        {
            title: "TOEP: Threshold Oriented Energy Prediction Mechanism for MPI-OpenMP Hybrid Applications",
            authors:['Shajulin Bendict', 'P.Gschwandtner', 'Thomas Fahringer'],
            details: "accepted in IEEE IC32018, Noida, India, 2018."
        },
        {
            title: "Prediction Assisted Runtime Based Energy Tuning Mechanism for HPC Applications",
            authors:['Shajulin Bendict'],
            details: "accepted in Sustainable Computing, Informatics and Systems, Elsevier, 2018."
        },
        {
            title: "Revenue oriented air quality prediction microservices for smart cities",
            authors:['Shajulin Bendict'],
            details: "IEEE Int. Conf. on Advances in Computing, Communications and Informatics (ICACCI), 2017."
        },
        {
            title: "A workflow runtime environment for manycore parallel architectures in Future Generation Computer Systems",
            authors:['M Janetschek', 'R Prodan', 'S Benedict']
        },
        {
            title: "Special issue on energy reduction techniques for exa-scale computing: theory and practice",
            authors:['S Benedict', 'M Gerndt', 'S Benkner'],
            details: "Computing 99 (8), 725-726, 2017."
        },
        {
            title: "Energy prediction of CUDA application instances using dynamic regression models in Computing",
            authors:['RS Rejitha', 'S Benedict', 'SA Alex', 'S Infanto'],
            details: "Springer, Vol. 99 (8), pp. 765-790, 2017."
        },
        {
            title: "QoS-based Cloud Application Management: Approach and Architecture",
            authors:['V Podolskiy', 'HM Gerndt', 'S Benedict'],
            details: "Proceedings of the 4th Workshop on CrossCloud Infrastructures & Platforms, 2017."
        },
        {
            title: "Computing Principles in Formulating Water Quality Informatics and Indexing Methods: An Ample Review ",
            authors:['NR Blessing', 'S Benedict'],
            details: "Journal of Computational and Theoretical Nanoscience Vol. 14 (4), pp. 1671-1681, 2017."
        },
        {
            title: "Energy analysis of code regions of HPC applications using EnergyAnalyzer tool",
            authors:['S Benedict', 'RS Rejitha', 'C Preethi', 'CB Bright', 'WS Judyfer'],
            details: "International Journal of Computational Science and Engineering 14 (3), 267-278, 2017."
        },
        {
            title: "A Bio-Inspired Hybrid Computation for Managing and Scheduling Virtual Resources using Cloud Concepts",
            authors:['NC Brintha', 'S Benedict', 'JTW Jappes'],
            details: "Appl. Math journal, Vol. 11 (2), pp 565-572, 2017."
        }
    ]
    rankedPublication = [];
    angular.forEach(publication, function(item) {
        rankedPublication.push({
            publication: item,
            rank: 0.5 - Math.random()
        });
    });
    this.rankedPublication=rankedPublication;
    this.faculty=faculty;
    rankedFaculty = [];
    angular.forEach(faculty, function(item) {
        rankedFaculty.push({
            faculty: item,
            rank: 0.5 - Math.random()
        });
    });
    this.rankedFaculty=rankedFaculty;
})