angular.module('eShop').controller('homeController',
    [
        function () {
            this.user = {
                name: 'Vasya',
                email: 'vasya@ukr.net'
            };
            this.block = {
                title: "Game of Thrones",
                imageAddress: "app/img/gameThrones.jpg",
                description: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. It is filmed at Titanic Studios in Belfast, on location in the United Kingdom, and in Croatia, Iceland, Malta, Morocco, Spain, and the United States. The series premiered on HBO in the United States on April 17, 2011, and its sixth season ended on June 26, 2016. The series was renewed for a seventh season, scheduled to premiere in mid-2017 with seven episodes.[1] The series will conclude with its eighth season in 2018.[2]"
            };
            this.slider = [
                "app/img/s1.jpg",
                "app/img/s2.jpg",
                "app/img/s3.jpg",
                "app/img/s4.jpg"
            ];
        }
    ]);
