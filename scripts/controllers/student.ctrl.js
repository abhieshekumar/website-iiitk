angular.module("app").controller("studentController", function($window,$scope,$rootScope,$timeout,$routeParams){
                        var tab=($routeParams.tab)?$routeParams.tab:'batch15';
                        tab = tab.toLowerCase();
                        var batch={
                            b15 : ["A. ADDEPALLI VENKATA MANIKYALA RAO","AKASH TIMMAPURAM","ANIL KUMAR YADAV","ANJU MARY PETER","ANUJ BHATLA","BANAVATH SHIVA SHANTHA MANI","BEVARA RAVI VARMA KUMAR","DARLA PRASHANTH","ESLAVATH RAMYA","ETHAKOTA PAVANSAI","HARSH KUMAR SINGH","JALIBILI PUSHPAK","KALIDINDI ALEKHYA","KODURU JASWANTH KUMAR","KOTLAPUDI JASWANTH","KOYYANA YASHWANT SRIVATSAV","MAROTU RAJESH KUMAR","MEDA RAVALI","MOOD DINESH","MUNJULURI SRIJA ASRITHA","POSIPOGU ANANDA BHARATH","RAJAT KUMAR","SAVIO JOSE","SHIVENDRA SINGH","SHUBHAM KUMAR","SUMALA SAI SIDDARDHA","VANKUDOTH PREMKUMAR","VEERANALA SANDEEP KUMAR","VEMULAPALLI RAJESH","JUHAL SIBY"],
                            b16 : [ "A. VANSHIKHA JAIN","ABHISHEK KUMAR","AKASH PUNDIR","AMRITHA HARIDASAN","AMRUTHAM ABHINAV","ANKIT VERMA","ARJUN M.","AVULA PRAVEEN","CHATALA AKHILESWARA KUMAR","DETI PRUDVI","DHULIPALLA SAHIL TEJA","GUGULOTHU ESHWAR SAI","JONNADA SAI MADHAV","KAMBLE CHARUDATTA DAYANAND","KELAVATH JAISINGH","KOCHUTHARAYIL PHILIP","KOPPETI DANIEL KAMAL RAJ","MADDIRALLA VINAY KUMAR","MANNEM SRINIVAS","SIDDHARTH MAURYA","NALLAPATI LAKSHMI VARA VENKATA SAI","PAMULA GAYATHRI","SAHUKARI OMSAI CHOWDARY","SAI SURYA KIRAN POKALA","SAMEER KUMAR SATYADARSHI","THALARI RAVINDRA","VISHNU S.","YEDLA SANDEEP KUMAR","BANOTHU UTTAM NAIK","PRASANNA KUMAR YAGATHI"],
                            b17 : [ "AADITHYA RAJ R.","ABHISHEK VISHWAKARMA","ADHYAN","ADITYA KUMAR NAYAK","ALLU HARSHAVARDHAN","ANKIT ANAND","ANSHUMAN GAURAV","ANSHUMAN MISHRA","ANUJ SRIVASTAVA","ARINDAM SINGH SENGAR","ARVIND RAJPUROHIT","ASHISH GUSAIN","AYUSH RAI","BANAVATH JYOTHIKA","DEEPESH SHARMA","DEVARAKONDA SRI VISHNU TEJA","DHARAVATHU NEEHARI NAIK","GARVIT SHARMA","GAURAV KANWAT","GONDU SHIVAKRISHNA","GORINKA RITHIKA","GUNISH","GUNJAN ASIT BAGDE","J. SANGEETHA","JAINEEL FENAL DHARIA","JANGAMREDDY HARSHA VARDHAN REDDY","JOEL MATHEW PHILIP","KARTHIKAYINI A","KONIDANA SAI MANOJ","KONJETY KEERTHI SREENIVAS","KOTA MANOJ KUMAR","KSHITIJ PAL","LAVANYA S.","LOVE KUMAR","MADIPADIGE LAXMAN","MAHFUZ HASAN","MAREPALLY SHIVAKUMAR","MATTAPARTI SATYA BHARGAVI","MEKALA UDAY BHARGAV","NEERAJ SAJEEV NAIR","PATTAN SALIM KHAN","PRAJNA VARIJ REDDY SARELLA","RAHUL KUMAR SINGH","REDDEDDY ANURAG REDDY","RISHAV JAISWAL","ROHITH SEBY","S. J. SAMEER AHMED","S. RAHUL BADAMI","SAGAR BHATIA","SANGEETHA SURESH","SANTOSH SHARMA","SATYAM RAJ","SHUBHAM MISHRA","SHUBHAM VINOD KHAMITKAR","SOMESH KUMAR","SRILAKSHMI AJITH","SUDHANSHU","SURYAPAL SINGH ASOLIA RAO","TUMUN SHAILY","UTKARSH TRIVEDI","VANGAPANDU SANDEEP","VEDANT SANDEEP JOSHI","VIBHOR VIJ","VISHAL SHIVAKUMAR KANAKAMAMIDI","VISHNU KHANTH BASKARAN"],
                            b18 : ["A V BHAVYA","A V S ADITYAVARDHAN","AELLIPEDDI SINDHUR ANJUMAN TEJ","AMEYA GUPTA","ANANTHU RAGHUVAMSI","ANJALI M N","ANTONY FRANCIS","BHASKAR PUROHIT","BIVEK BENOY PAUL","BUSIREDDY MANSI REDDY","CHINTHA OMESH SAI","DEVARANENI DINESH","DHANUSH R H","DHURJATI VATS","DINESH KUMAR P","ESLAVATH PAVAN","GUDI AVINASH","GUMMADI AVINASH","HARIPRASATH K","JAGRITI THAKUR","JONNALAGADDA VENKATA SATHYA KRISHNA","KANDULA VENKATESHWAR REDDY","KARTHIK B S","KAUSHAL","KAUSHAL SAMANT","KODALI SIVA GANESH","KOTHAPALLE SHYAM SUNDAR","KUMARI MISA","KUSHAGRA MANISH","M G CHRISTOPHER","MACHARLA SINDHUJA","MADALA NIRUPAMA CHOWDARY","MADDA AISHWARYA","MAHESH M","MEENAKSHI VENKITTARAMAN","MEESALA SOWMYA","MUHAMMED NIHAL K V","MUHAMMED NIZAR E","MUSKAN RANA","NIKHIL KUMAR","NIKHIL KUMAR GHANGHOR","PADIYA SURENDAR","PAMARTHI KUNAL","PASUMARTHI ABHISHEK","PASUPULETI SAI KUMAR","PEDADA VENKATA HARSHA","PEDDI SHWEJAN","PRABAL KALIA","PRABHAV KUMAR SINGH","PUSHPAM SAXENA","RACHIT VERMA","RAGHUL MANI R S","RAGURAAM D","RAHUL NAYAK B V","RAHUL RANJAN","RAMANA BOYANA GOVARDHAN","RAMKUMAR","RITIK NIRAJ AGRAWAL","ROSHINI RASHEED","RUCHIKA SREEDHAR","RUMAISE","S SREEVASASUDHARSAN","SAARUN P NAIR","SAI KUMAR AVU","SAMUDRALA SHIVA KUMAR","SARFARAZ AHMED K L","SHIVANSH DARSHAN","SHREYAS J S","SIDDHARTH ASHOK UNNITHAN","SNEHAMOL BALAN","SREENIVASA SUMADITHYA","SUMANA BUSHI REDDY","TARUN KUMAR SINGH","TEJASH MORE","TIJO THOMAS","UPPILI SANDEEP","VAISAKH DILEEP","VENKATASWAMY SUNDAR","VISHNU AJITH","YADDANAPUDI VINAY","YAMPARALA VENKATA GOPI","YARLAGADDA SAI BHAVADEESH","ALLU HARSHAVARDHAN"]
                        }
                        var tnames=Object.values(batch);
                        var jdata={};
                        tnames.forEach(function(el){
                            el.forEach(function(el){
                                jdata[el]=null;
                            })
                        });
                        $scope.$on('$viewContentLoaded', function(event) {
                            $timeout(function(){
                                $scope.$apply(function(){
                                    $rootScope.activeTab='students';
                                });
                                $('ul.tabs').tabs();
                                $('ul.tabs').tabs('select_tab', tab);
                                $('ul.tabs').on('click', function(e){
                                    var page = e.target.hash;
                                    page = '/students/'+ (page.replace('#',''));
                                    page = page.toString();
                                    $window.ga('set', 'page', page);
                                    $window.ga('send', 'pageview');
                                });
                                $('input.autocomplete').autocomplete({
                                    data: jdata,
                                    limit: 3,
                                    onAutocomplete: function(val) {},
                                    minLength: 1
                                });
                                $rootScope.initializeTabs();
                            },$rootScope.tabDelay);
                        });
                        this.batch=batch;
                        this.scrollRight=$rootScope.scrollRight;
                        this.scrollLeft=$rootScope.scrollLeft;
                    })