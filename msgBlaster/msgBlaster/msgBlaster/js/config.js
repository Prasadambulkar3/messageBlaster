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
            templateUrl: "views/dashboard.html",
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
            templateUrl: "views/users.html",
            data: { pageTitle: 'Users' }
        })

         .state('app.login', {
             url: "/login",
             templateUrl: "views/login.html",
             data: { pageTitle: 'Login' },
             resolve: {
                 loadPlugin: function ($ocLazyLoad) {
                     return $ocLazyLoad.load([
                         {
                             files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                         }
                     ]);
                 }
             }
         })

        .state('forgot_password', {
            url: "/forgot_password",
            templateUrl: "views/forgot_password.html",
            data: { pageTitle: 'Forgot password', specialClass: 'gray-bg' }
        })

        .state('app.profile', {
            url: "/profile",
            templateUrl: "views/profile.html",
            data: { pageTitle: 'Profile' }
        })

        .state('app.groups', {
            url: "/groups",
            templateUrl: "views/groups.html",
            data: { pageTitle: 'Projects' }
        })

        .state('app.templates', {
            url: "/templates",
            templateUrl: "views/templates.html",
            data: { pageTitle: 'Templates' }
        })

        .state('app.locations', {
            url: "/locations",
            templateUrl: "views/locations.html",
            data: { pageTitle: 'Locations' }
        })

        .state('app.contacts', {
            url: "/contacts",
            templateUrl: "views/contacts.html",
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
            templateUrl: "views/importContacts.html",
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
            templateUrl: "views/campaigns.html",
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
          templateUrl: "views/coupons.html",
          data: { pageTitle: 'Coupons' },
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
         templateUrl: "views/creditRequests.html",
         data: { pageTitle: 'Credit Requests' },
     })

}
angular
    .module('msgBlaster')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
