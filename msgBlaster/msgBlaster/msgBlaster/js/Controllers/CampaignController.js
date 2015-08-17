

function CampaignController() {
    //alert("ContactController");

}

function CampaignListController() {

    var newColumns = [
                         { field: "Name", headerText: "Name", textAlign: ej.TextAlign.Right },
                         { field: "Recipients", headerText: "RecipientsNumber",  textAlign: ej.TextAlign.Right },
                         { field: "ScheduledDate", headerText: "Send Date", format: "{0:dd-MMM-yy}", textAlign: ej.TextAlign.Right },
                         { field: "RequiredCredits", headerText: "Credits",  textAlign: ej.TextAlign.Right },
                         { field: "", headerText: "Log", textAlign: ej.TextAlign.Center },
                         { headerText: "Resend",textAlign: ej.TextAlign.Center , template: "<a href=&#8217;#’><i class='fa fa-share-square-o fa-fw'></i></a>" }
                     ];

    this.columns = newColumns;

   // this.data = ej.DataManager({ url: "http://localhost:63138/api/Campaign/GetCampaignListByClientId?clientid=1", adaptor: "WebApiAdaptor", offline: true });

    this.query = new ej.Query().addParams('selecedYear', '2014').addParams('accessId', '1');

    this.allowpaging = { allowPaging: true };

    this.pagesettings = { pageSize: 13 };

    this.allowsorting = { allowSorting: true };

    this.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }

}