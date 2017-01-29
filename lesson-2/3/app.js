angular.module('myApp', []);

angular.module('myApp').run(function($rootScope) {
    $rootScope.color = 'blue';
});

angular.module('myApp').controller('myCtrl', function($scope) {
    $scope.color = "red";
});