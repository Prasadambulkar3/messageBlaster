/**
 * INSPINIA - Responsive Admin Theme
 *
 */

angular.module('App', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                        // Idle timer  
        'ejangular',
        'ngRoute',
        'ngResource',
        'ngCookies',
        'App.services',
        'App.directives',
        'App.controllers'
]);




// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad