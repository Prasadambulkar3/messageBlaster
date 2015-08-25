
App.controller('CouponCampaignController', function () {

});

App.controller('CouponCampaignListController', function ($scope) {


    var newColumns = [
                         { field: "CouponCampaignName", headerText: "Name", textAlign: ej.TextAlign.Right },
                         { field: "Recipients", headerText: "Recipients", textAlign: ej.TextAlign.Right },
                         { field: "SentDateTime", headerText: "Send Date", format: "{0:dd-MMM-yy}", textAlign: ej.TextAlign.Right },
                         { field: "ExpiresOn", headerText: "Expiry Date ", textAlign: ej.TextAlign.Right },
                         { headerText: "Log ", textAlign: ej.TextAlign.Center, template: "<a href=&#8217;#’>view log</a>" },
                         { headerText: "Change Expiry Date", textAlign: ej.TextAlign.Center, template: "<a href=&#8217;#’>modify</a>" }
    ];


    $scope.columns = newColumns;

    $scope.data = ej.DataManager({ url: "http://192.168.1.52/msgblasterApi/api/Coupon/GetCouponListByClientId?clientid=1", adaptor: "WebApiAdaptor", offline: true });

    $scope.query = new ej.Query().addParams('selecedYear', '2014').addParams('accessId', '1');

    $scope.allowpaging = { allowPaging: true };

    $scope.pagesettings = { pageSize: 13 };

    $scope.allowsorting = { allowSorting: true };

    $scope.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }
});

App.controller('CouponRedeemptionController', function ($scope) {


});