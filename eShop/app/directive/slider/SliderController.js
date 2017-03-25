angular.module('eShop').controller('sliderController',
    [
        '$scope',
        '$element',
        '$attrs',
        function ($scope, $element, $attrs) {
            console.log($scope, $element, $attrs);
            this.title = $scope.title;
            this.images = $scope.images;
        }
    ]);
