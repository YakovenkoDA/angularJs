angular.module(
    'dirApp',
    ['ui.router']
);

angular.module('dirApp').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');
            
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'home'
                })
        }
    ]);