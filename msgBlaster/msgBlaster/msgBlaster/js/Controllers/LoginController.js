var App = angular.module('App.controllers', []);

App.controller('LoginController', function ($scope, $rootScope, $window, $cookieStore, LoginService, ApplicationSettingService) {

    //Remove cookie if it was present earlier.
    $cookieStore.remove('LoggedUser');

    //Function call for login
    $scope.SignIn = function (User, valid) {

        if (valid) {
            var login = LoginService.SignIn(User);

            login.then(function (User) {
                if (User.Email != null && User.Password != null) {

                    $rootScope.loggedPerson = User;

                    if (navigator.cookieEnabled) {

                        $cookieStore.put('LoggedUser', $rootScope.loggedPerson);

                        $window.location = ApplicationSettingService.StartupPagePath;
                    }
                    else {
                        toastr.warning("Please enable cookies of your browser");
                    }

                } else {

                    $rootScope.InvalidLogin = true;
                }

            }, function (error) {
                toastr.error("Some error occurred on this page.Please try again");
            })
        }
    }

});