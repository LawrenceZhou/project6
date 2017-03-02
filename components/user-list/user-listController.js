'use strict';

cs142App.controller('UserListController', ['$scope', '$resource',
    function ($scope, $resource) {
        $scope.main.title = 'Users';
        //$scope.nameList = window.cs142models.userListModel();
        /*$scope.FetchModel("http://localhost:3000/user/list", function(model){
            var object = JSON.parse(model);
            $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.nameList = object;
            });
        });*/

        var userList = $resource('http://localhost:3000/user/list', {}, {'query': {method: 'GET'}});
        var object = userList.query({}, function() {
            object.$query();
            $scope.nameList = object;
        });

        //console.log('window.cs142models.userListModel()', window.cs142models.userListModel());
    }]);

