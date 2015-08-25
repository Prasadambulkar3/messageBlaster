
var App = angular.module('App.services', []);

App.service('ApplicationSettingService', function () {
    
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
});

App.service('DataAccessService', function ($http, $q, $window, ApplicationSettingService) {

    var domain = ApplicationSettingService.WebApiUrl;

    //------------- Get Single Object 
    this.getData = function (url, Id) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url,
            data: Id
        }).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    //------------- Get Single Object 
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

    //------------- Get Data with Object & Params
    this.getDataWithObjectAndParams = function (url, object, params) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url,
            data: object,
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

    //------------- Get Object List
    this.getDataList = function (url) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url
        }).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    //--------------- Post Data to WEB API
    this.postData = function (url, object) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: url,
            data: object//,
            //params: paramObject
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

    //--------------- Post Data to WEB API with Param and Object
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

    //--------------- Post Data to WEB API With Param
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

    //---------- Send Request to WEB API for Delete Record
    this.deleteData = function (url, Id, AccessId) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var defer = $q.defer();
        var res = $resource(url);

        res.delete({ id: Id, AccessId: AccessId }, function (data) {
            defer.resolve();
        }, function () {
            defer.reject();
        });
        return defer.promise;
    };

    //----------- Check record is Unique 
    this.checkUniqueData = function (url, value, Id) {

        if (ApplicationSettingService.APIMode) {
            url = domain + url;
        }

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url,
            data: Id
        }).
        success(function (data, status, headers, config) {

            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;

    }

});