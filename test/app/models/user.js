angular.module('routerApp').service('User',
    [
        function () {
            this.createUser = function (user) {
                var users = localStorage.getItem('users');
                if (users) {
                    users = JSON.parse(users);
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(users));
                } else {
                    localStorage.setItem('users', JSON.stringify([user]));
                }

            };
            this.getAll = function () {
                var users = localStorage.getItem('users');
                return JSON.parse(users);
            }
        }
    ]);
