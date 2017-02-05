angular.module('routerApp').controller('login',
    [
        'User',
        'Validator',
        function (User, Validator) {
            this.errors = {
                email: '',
                password: ''
            };
            this.user = {};
            this.validateEmail = function (email) {
                this.errors.email = Validator.validateEmail(email);
            };
            this.register = function (user) {
                User.createUser(user);
            }
        }
    ]);
