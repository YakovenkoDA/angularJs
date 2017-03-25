angular.module('eShop').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/notFound');

            $stateProvider
                .state('notFound', {
                    url: '/notFound',
                    templateUrl: 'app/notFound/notFound.html'
                })
                .state('main', {
                    url: '',
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'app/header/header.html'
                        },
                        'footer': {
                            templateUrl: 'app/footer/footer.html'
                        }
                    }
                })
                .state('main.home', {
                    url: '/',
                    views: {
                        'content@': {
                            templateUrl: 'app/home/home.html',
                            controller: 'homeController',
                            controllerAs: 'home'
                        }
                    }
                })
                .state('main.about', {
                    url: '/about',
                    views: {
                        'content@': {
                            templateUrl: 'app/about/about.html',
                            controller: 'aboutController',
                            controllerAs: 'about'
                        }
                    }
                })
                .state('main.cart', {
                    url: '/cart',
                    views: {
                        'content@': {
                            templateUrl: 'app/cart/cart.html',
                            controller: 'aboutController',
                            controllerAs: 'cart'
                        }
                    }
                })
                .state('main.catalog', {
                    url: '/catalog/:id',
                    views: {
                        'content@': {
                            templateUrl: 'app/catalog/catalog.html',
                            controller: 'catalogController',
                            controllerAs: 'catalog'
                        },
                        'categories@main.catalog': {
                            templateUrl: 'app/catalog/categories.html',
                            controller: 'catalogController',
                            controllerAs: 'catalog'
                        },
                        'products@main.catalog': {
                            templateUrl: 'app/catalog/products.html',
                            controller: 'catalogController',
                            controllerAs: 'catalog'
                        }
                    }

                })

        }
    ]);
