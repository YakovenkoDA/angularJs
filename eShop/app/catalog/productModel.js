angular.module('eShop').service('productModel',
    [
        'productDb',
        function (productDb) {
            this.getAll=function () {
                return productDb.products;
            };
            this.getById = function (id) {
                return productDb.products[id];
            }
        }
    ]);
