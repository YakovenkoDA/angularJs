angular.module('eShop').directive('mySlider',
    function() {
        return {
            restrict: 'E',
            scope:{
                title: '@',
                images: '='
            },
            templateUrl: 'app/directive/slider/slider.html',
            controller: 'sliderController',
            controllerAs: 'slider'
        };
    });