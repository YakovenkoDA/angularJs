angular.module('eShop').directive('myBlock',
    function() {
        return {
            restrict: 'E',
            scope:{
                title: '@',
                image: '@',
                description: '@'
            },
            templateUrl: 'app/directive/block/block.html',
        };
    });

