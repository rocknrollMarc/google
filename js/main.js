
var app = angular.module("myApp", []);

app.config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: "templates/home.html",
    controller: 'HomeController'
  })
  .otherwize({redirectTo: '/'});
});

app.controller('HomeController', function($scope){

});

app.controller('MailListingController', ['$scope', '$http', function($scope,
    $http) {
    $scope.email = [];

    $http({
        method: 'GET',
        url: 'api/mail'
    })
        .success(function(data, status, headers){
            $scope.email = data.all;
        })

        .error(function(data, status, headers) {

                                         });
        }]);


app.controller('ContentController' = function($scope) {

};

app.controller('SettingsController', function($scope) {
  $scope.settings = {
    name: "Marc",
    email: "marc.bluemner@gmail.com"
  };

  $scope.updateSettings = function() {
  console.log("updatedSettings was called")
  }

});
