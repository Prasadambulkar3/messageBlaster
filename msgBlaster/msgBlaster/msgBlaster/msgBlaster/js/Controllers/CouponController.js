
function CouponController() {

    var newColumns = [
                         { field: "CouponCampaignName", headerText: "Name", textAlign: ej.TextAlign.Right },
                         { field: "Recipients", headerText: "Recipients", textAlign: ej.TextAlign.Right },
                         { field: "SentDateTime", headerText: "Send Date", format: "{0:dd-MMM-yy}", textAlign: ej.TextAlign.Right },
                         { field: "ExpiresOn", headerText: "Expiry Date ", textAlign: ej.TextAlign.Right },
                         { headerText: "Log ", textAlign: ej.TextAlign.Center, template: "<a href=&#8217;#’>view log</a>" },
                         { headerText: "Change Expiry Date", textAlign: ej.TextAlign.Center, template: "<a href=&#8217;#’>modify</a>" }
                    ];


    this.columns = newColumns;

    this.data = ej.DataManager({ url: "http://localhost:63138/api/Coupon/GetCouponListByClientId?clientid=1", adaptor: "WebApiAdaptor", offline: true });

    this.query = new ej.Query().addParams('selecedYear', '2014').addParams('accessId', '1');

    this.allowpaging = { allowPaging: true };

    this.pagesettings = { pageSize: 13 };

    this.allowsorting = { allowSorting: true };

    this.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }
}