
var App = angular.module('App.controllers', []);

App.controller('MainController', function ($scope, $rootScope, $cookieStore, $window) {

    var LoggedUser = $cookieStore.get('LoggedUser');

    if (LoggedUser != undefined) {
        $rootScope.loggedPerson = LoggedUser;
        var UserAccessPrivilages = $rootScope.loggedPerson.UserAccessPrivileges;
    } else {
        $window.location = ApplicationSettingService.LoginPagePath;
    }

    $scope.send = function () {
        alert("send");
    }

    $scope.links = [
                  { show: "true", state: "app.dashboard", icon: "fa fa-th-large", linkName: "Dashboard" },
                  //{ state: "app.groups", icon: "fa fa-group", linkName: "Groups" },
                  { show: UserAccessPrivilages.Contacts, state: "app.contacts", icon: "fa fa-book", linkName: "Contacts" },
                  { show: UserAccessPrivilages.Campaigns, state: "app.campaigns", icon: "fa fa-edit", linkName: "Campaigns" },
                  { show: UserAccessPrivilages.Coupons, state: "app.coupons", icon: "fa fa-sitemap", linkName: "Coupons" },
                  { show: UserAccessPrivilages.Users, state: "app.users", icon: "fa fa-user", linkName: "Users" },
                  { show: UserAccessPrivilages.Locations, state: "app.locations", icon: "fa fa-bus", linkName: "Locations" },
                  { show: UserAccessPrivilages.Templates, state: "app.templates", icon: "fa fa-table", linkName: "Templates" },
                  { show: UserAccessPrivilages.ImportContacts, state: "app.importContacts", icon: "fa fa-upload", linkName: "Import Contacts" },
                  { show: UserAccessPrivilages.CreditRequests, state: "app.creditRequests", icon: "fa fa-wrench", linkName: "Buy Credits" },
                  { show: UserAccessPrivilages.Redeems, state: "app.redeemCoupons", icon: "fa fa-shopping-cart", linkName: "Redeem Coupons" },
                  { show: UserAccessPrivilages.Settings, state: "app.settings", icon: "fa fa-gear", linkName: "Settings" },
    ];

    $scope.groups = [
      'Family',
      'Friends',
      'My Group',
      'Test Group',
      'Group1',
      'My Group2'
    ];

});
