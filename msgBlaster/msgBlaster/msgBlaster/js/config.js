/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/app/dashboard");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "views/common/content.html"
        })

    .state('app.dashboard', {
        url: "/dashboard",
        templateUrl: "../msgBlaster/views/common/dashboard.html",
        data: { pageTitle: 'Dashboard' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        name: 'angular-flot',
                        files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                    },
                    {
                        files: ['js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', 'js/plugins/jvectormap/jquery-jvectormap-2.0.2.css']
                    },
                    {
                        files: ['js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                    },
                    {
                        name: 'ui.checkbox',
                        files: ['js/bootstrap/angular-bootstrap-checkbox.js']
                    }
                ]);
            }
        }
    })

    .state('app.users', {
        url: "/users",
        templateUrl: "../msgBlaster/views/user/list/userList.html",
        data: { pageTitle: 'Users' }
    })

    .state('app.profile', {
        url: "/profile",
        templateUrl: "../msgBlaster/views/client/profile.html",
        data: { pageTitle: 'Profile' }
    })

    .state('app.groups', {
        url: "/groups",
        templateUrl: "../msgBlaster/views/group/list/groupList.html",
        data: { pageTitle: 'Projects' }
    })

    .state('app.templates', {
        url: "/templates",
        templateUrl: "../msgBlaster/views/template/list/templateList.html",
        data: { pageTitle: 'Templates' }
    })

    .state('app.locations', {
        url: "/locations",
        templateUrl: "../msgBlaster/views/location/list/locationList.html",
        data: { pageTitle: 'Locations' }
    })

    .state('app.contacts', {
        url: "/contacts",
        templateUrl: "../msgBlaster/views/contact/list/contactList.html",
        data: { pageTitle: 'Contacts' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        insertBefore: '#loadBefore',
                        name: 'localytics.directives',
                        files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                    },
                ]);
            }
        }
    })

    .state('app.importContacts', {
        url: "/importContacts",
        templateUrl: "../msgBlaster/views/importContact/importContact.html",
        data: { pageTitle: 'Import Contacts' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    })

    .state('app.campaigns', {
        url: "/campaigns",
        templateUrl: "../msgBlaster/views/campaign/list/campaignList.html",
        data: { pageTitle: 'Campaigns' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    })

    .state('app.coupons', {
        url: "/coupons",
        templateUrl: "../msgBlaster/views/coupon/list/couponCampaignList.html",
        data: { pageTitle: 'Coupon Campaigns' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    })

    .state('app.creditRequests', {
        url: "/creditRequests",
        templateUrl: "../msgBlaster/views/creditRequest/list/creditRequestList.html",
        data: { pageTitle: 'Credit Requests' },
    })

    .state('app.createContact', {
        url: "/addContact",
        templateUrl: "../msgBlaster/views/contact/create/createContact.html",
        data: { pageTitle: 'Add Contact' },
    })

    .state('app.createCampaign', {
    url: "/addCampaign",
    templateUrl: "../msgBlaster/views/campaign/create/createCampaign.html",
    data: { pageTitle: 'Add Campaign' },
})

    .state('app.createCouponCampaign', {
    url: "/addCouponCampaign",
    templateUrl: "../msgBlaster/views/coupon/create/createCouponCampaign.html",
    data: { pageTitle: 'Add Campaign' },
})

    .state('app.createUser', {
    url: "/addUser",
    templateUrl: "../msgBlaster/views/user/create/createUser.html",
    data: { pageTitle: 'Add User' },
})

    .state('app.createCreditRequest', {
        url: "/addCreditRequest",
        templateUrl: "../msgBlaster/views/creditRequest/create/createCreditRequest.html",
        data: { pageTitle: 'Add Credit Request' },
    })

    .state('app.redeemCoupons', {
        url: "/redeemCoupons",
        templateUrl: "../msgBlaster/views/coupon/redeem/redeemCoupons.html",
        data: { pageTitle: 'Coupon Redeemption' },
    })

    .state('app.settings', {
        url: "/settings",
        templateUrl: "../msgBlaster/views/settings/settings.html",
        data: { pageTitle: 'Setings' },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    })

}
angular
    .module('msgBlaster')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
