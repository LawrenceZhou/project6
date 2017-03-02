'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams', '$resource',
  function($scope, $routeParams, $resource) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    //$scope.user = window.cs142models.userModel(userId);
    /*$scope.FetchModel("http://localhost:3000/photosOfUser/" + userId, function(model){
        var object = JSON.parse(model);
        $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.photos = object;
        });
    });*/

    var photo = $resource('http://localhost:3000/photosOfUser/'+userId, {}, {'query': {method: 'GET', isArray : true}});
        var object = photo.query({}, function() {
            $scope.photos = object;
            console.log(object, $scope.photos);
        });



    //$scope.photos = window.cs142models.photoOfUserModel(userId);
    /*$scope.FetchModel("http://localhost:3000/user/" + userId, function(model){
        var object = JSON.parse(model);
        $scope.$apply(function () {
            // Put your code that updates any $scope variables here
            $scope.user = object;
            var firstName = $scope.user.first_name;
            var lastName = $scope.user.last_name;
            $scope.main.toolBar = "Photos of " + firstName + " " + lastName;
            $scope.user.name = firstName + " " + lastName;
        });
    });*/

    var user = $resource('http://localhost:3000/user/:id', {}, {});
        var object = user.get({id: userId}, function() {
            $scope.user = object;
            var firstName = $scope.user.first_name;
            var lastName = $scope.user.last_name;
            $scope.main.toolBar = firstName + " " + lastName;
            $scope.user.name = firstName + " " + lastName;
        });

    //var firstName = $scope.user.first_name;
    //var lastName = $scope.user.last_name;
    //$scope.main.toolBar = "Photos of " + firstName + " " + lastName;

    //console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
    //   window.cs142models.photoOfUserModel(userId));

  }]);
