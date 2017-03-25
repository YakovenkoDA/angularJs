angular.module('eShop').service('categoryDb',
    [
        function () {
            this.categories = {
                "1": {
                    "id": "1",
                    "title": "",
                    "parentId": "",
                    "status": "",
                    "level": ""
                },
                "2": {
                    "id": "2",
                    "title": "",
                    "parentId": "",
                    "status": "",
                    "level": ""
                },
                "3": {
                    "id": "3",
                    "title": "Fruits",
                    "parentId": "0",
                    "status": "1",
                    "level": "1"
                },
                "4": {
                    "id": "4",
                    "title": "",
                    "parentId": "",
                    "status": "",
                    "level": ""
                }
            };
        }
    ]
);
