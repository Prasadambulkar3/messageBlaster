/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('msgBlaster', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                        // Idle timer  
        'ejangular',
        'ngRoute',
        'ngResource'
        
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad