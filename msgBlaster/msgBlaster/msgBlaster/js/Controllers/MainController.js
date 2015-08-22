
var App = angular.module('App.controllers', []);

App.controller('MainController', function () {

    this.send = function () {
        alert("send");
    }

    this.links = [
                  { state: "app.dashboard", icon: "fa fa-th-large", linkName: "Dashboard" },
                  { state: "app.groups", icon: "fa fa-group", linkName: "Groups" },
                  { state: "app.contacts", icon: "fa fa-book", linkName: "Contacts" },
                  { state: "app.campaigns", icon: "fa fa-edit", linkName: "Campaigns" },
                  { state: "app.coupons", icon: "fa fa-sitemap", linkName: "Coupons" },
                  { state: "app.users", icon: "fa fa-user", linkName: "Users" },
                  { state: "app.locations", icon: "fa fa-bus", linkName: "Locations" },
                  { state: "app.templates", icon: "fa fa-table", linkName: "Templates" },
                  { state: "app.importContacts", icon: "fa fa-upload", linkName: "Import Contacts" },
                  { state: "app.creditRequests", icon: "fa fa-wrench", linkName: "Buy Credits" },
                  { state: "app.redeemCoupons", icon: "fa fa-shopping-cart", linkName: "Redeem Coupons" },
                  { state: "app.settings", icon: "fa fa-gear", linkName: "Settings" },
    ];

    this.groups = [
      'Family',
      'Friends',
      'My Group',
      'Test Group',
      'Group1',
      'My Group2'
    ];

});
