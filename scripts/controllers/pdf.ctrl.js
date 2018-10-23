angular.module("app").controller("pdfController",function($routeParams,$scope,$rootScope,$sce){
    this.file=$routeParams.file;
    this.heading=$routeParams.heading;
    this.toView=$routeParams.toView;    //not-being-used-instead $rootScope.oldPath
    this.global=$rootScope;
    this.iframeSrc=$sce.trustAsResourceUrl("http://docs.google.com/gview?url=http://www.iiitkottayam.ac.in/beta/data/pdf/"+$routeParams.file+".pdf&embedded=true");
    $scope.$on('$viewContentLoaded',function(){
        $('.custom-view').css({
            'padding-top':'0px'
        });
    })
})