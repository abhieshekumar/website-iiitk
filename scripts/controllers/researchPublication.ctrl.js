angular.module("app").controller("researchPublicationController",function($rootScope,$timeout,$scope){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $('.collapsible').collapsible();
        },$rootScope.tabDelay);
    });
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
    this.publications=publication;
});