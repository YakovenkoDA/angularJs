angular.module('myApp').controller(
    'todoCtrl', function ($scope) {
        $scope.todoList = ['Clean House'];
        $scope.completeList = ['Sleep'];
        $scope.validateError = '';

        $scope.todoAdd = function () {
            $scope.todoList.push($scope.todoInput);
            $scope.todoInput = "";
        };
        
        $scope.validate = function () {
            $scope.todoInput
        };

        $scope.removeListItem = function (index, listName) {
            switch (listName) {
                case 'todo':
                    $scope.todoList.splice(index, 1);
                    break;
                case 'complete':
                    $scope.todoList.splice(index, 1);
                    break;
            }
        };

        $scope.complete = function (index) {
            $scope.completeList.push($scope.todoList[index]);
            $scope.todoList.splice(index, 1);
        }
    }
);