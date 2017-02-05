angular.module('routerApp').service('Validator',
    [
        function () {
            this.validateEmail = function (email) {

                return 'sorry eMail is not valid'
            }
        }
    ]);
