angular.module('routerApp').controller('UserController',
    [
        'User',
        function (User) {
            this.users = User.getAll();
        }
    ]);
