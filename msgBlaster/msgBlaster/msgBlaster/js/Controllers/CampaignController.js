
App.controller('CampaignController', function ($scope) {

    //alert("ContactController");

});

App.controller('CampaignListController', function ($scope) {

    var newColumns = [
                         { field: "Name", headerText: "Name", textAlign: ej.TextAlign.Right },
                         { field: "Recipients", headerText: "RecipientsNumber", textAlign: ej.TextAlign.Right },
                         { field: "ScheduledDate", headerText: "Send Date", format: "{0:dd-MMM-yy}", textAlign: ej.TextAlign.Right },
                         { field: "RequiredCredits", headerText: "Credits", textAlign: ej.TextAlign.Right },
                         { field: "", headerText: "Log", textAlign: ej.TextAlign.Center },
                         { headerText: "Resend", textAlign: ej.TextAlign.Center, template: "<a href=&#8217;#’><i class='fa fa-share-square-o fa-fw'></i></a>" }
    ];

    $scope.columns = newColumns;

    $scope.data = ej.DataManager({ url: "http://192.168.1.52/msgblasterApi/api/Campaign/GetCampaignListByClientId?clientid=1", adaptor: "WebApiAdaptor", offline: true });

    $scope.query = new ej.Query().addParams('selecedYear', '2014').addParams('accessId', '1');

    $scope.allowpaging = { allowPaging: true };

    $scope.pagesettings = { pageSize: 13 };

    $scope.allowsorting = { allowSorting: true };

    $scope.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }

});