angular.module("app").controller("idyController",function($scope,$rootScope,$timeout){
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function(){
            $scope.$apply(function(){
                $rootScope.activeTab='idy';
            });
            $('.carousel.carousel-slider').carousel({fullWidth: true});
            function autoplay() {
                $('.carousel').carousel('next');
            setTimeout(autoplay, 4500);}
            autoplay();
        },$rootScope.tabDelay);
    });
})