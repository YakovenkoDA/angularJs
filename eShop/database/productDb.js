angular.module('eShop').service('productDb',
    [
      function () {
        this.products = {
          "1": {
            "id": "1",
            "title": "Orange",
            "description": "Orange",
            "categoryId": "3",
            "brandId": "",
            "price": "10",
            "taxId": "",
            "measureGroupId": "1",
            "statusId": "",
            "parentProductId": "",
            "size": "",
            "primaryVendorId": "",
            "isSellableOnWeb": "",
            "notShippable": "",
            "noDiscount": "",
            "isToGoTaxable": "",
            "imageUrl": "",
            "tags": ""
          },
          "2": {
            "id": "2",
            "title": "Banana",
            "description": "Banana",
            "categoryId": "3",
            "brandId": "",
            "price": "5",
            "taxId": "",
            "measureGroupId": "",
            "statusId": "",
            "parentProductId": "",
            "size": "",
            "primaryVendorId": "",
            "isSellableOnWeb": "",
            "notShippable": "",
            "noDiscount": "",
            "isToGoTaxable": "",
            "imageUrl": "",
            "tags": ""
          }
        };
      }
    ]
);