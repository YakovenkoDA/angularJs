angular.module('eShop').service('categoryModel',
    [
        'categoryDb',
        function (categoryDb) {
            this.getAll=function () {
                return categoryDb.categories;
            };
            this.getById = function (id) {
                return categoryDb.categories[id];
            }
        }
    ]);
