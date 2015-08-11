

function DataAccessService($http, $q, $log, $rootScope, $window, $resource, $sce, ApplicationSettingService) {

    var domain = ApplicationSettingService.WebApiUrl;
   

   

    this.getData = function (url) {

        //alert(url)
       // url = domain + url;

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url
        }).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            if (status == 408) {
              //  $window.location = ApplicationSettingService.SessionTimeoutPagePath;
            }
            else {
                deferred.reject(status);
            }
        });
        return deferred.promise;
    };




       //--------------- Post Data to WEB API
    this.postData = function (url, object) {

        console.log(object);

       // url = domain + url;

        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: url,
            data: object//,
            //params: paramObject
        }).
        success(function (data, status, headers, config) {            
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            if (status == 408) {
               // $window.location = ApplicationSettingService.SessionTimeoutPagePath;
            }
            else {
                deferred.reject(status);
            }
        });
      
        return deferred.promise;

    };



    this.getDataWithParams = function (url, params) {              
        
        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url,
            params: params
        }).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {


            deferred.reject(status);
        });
        return deferred.promise;
    };


    this.postDataWithObjectAndParams = function (url, object, params) {   
             

        if (ApplicationSettingService.APIMode) {

            url = domain + url;

        }    

        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: url,
            data: object,
            params: params
        }).
        success(function (data, status, headers, config) {
            console.log("Data access s");
            console.log(data);
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(status);
        });

        return deferred.promise;
    };

    this.postDataWithParams = function (url, params) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: url,
            params: params
        }).
        success(function (data, status, headers, config) {
            console.log("Data access s");
            console.log(data);
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(status);
        });

        return deferred.promise;

    };

}



function ApplicationSettingService($rootScope, $resource, $sce, $location) {


    this.WebApiUrl = "http://localhost:63138/";

    this.LoginPagePath = "/msgblaster-ui/Login.html";

    this.StartupPagePath = "./app/view/shared/Layout.html";

    this.StartupPageRegistration = "./Layout.html";

    this.StartupPagePathCouponUser = "./app/view/shared/CouponUserLayout.html";

    this.documentPath = "D:/Projects/msgblaster-ui/app/data/documents/";

    this.CouponCampaignMessage = "Your CouponCode is: [Code]"

    this.RecordsPerPage = 10;
    this.PaginationLength = 5;

    this.datePlaceHolderText = "dd-mm-yyyy";

    this.APIMode = true;

    this.SystemUser = { "Id": 101, "Name": "Admin" }

    this.columnSize;

    this.VerificationCodeSentLimit = 3;



}