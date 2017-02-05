// app.js
angular.module(
    'routerApp',
    ['ui.router']
);

angular.module('routerApp').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/signIn');


            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/views/home/home.html'
                })
                .state('home.users', {
                    url: '/users',
                    templateUrl: 'app/views/home/userView.html',
                    controller: 'UserController',
                    controllerAs: 'list'
                })
                .state('home.projects', {
                    url: '/projects',
                    template: 'I could sure use a drink right now.'
                })
                .state('signIn', {
                    url: '/signIn',
                    templateUrl: 'app/views/login/signIn.html',
                    controller: 'login',
                    controllerAs: 'login'
                })
                .state('signUp', {
                    url: '/signUp',
                    templateUrl: 'app/views/login/signUp.html',
                    controller: 'login',
                    controllerAs: 'login'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/views/about/about.html'
                })
        }
    ]);