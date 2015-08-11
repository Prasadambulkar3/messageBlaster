
function MainController() {

    this.send = function () {
        alert("send");
    }

    this.links = [         
                  { state: "app.dashboard", icon: "fa fa-th-large", linkName: "Dashboard" },
                  { state: "app.groups", icon: "fa fa-group", linkName: "Groups" },
                  { state: "app.contacts", icon: "fa fa-book", linkName: "Contacts" },
                  { state: "app.importContacts", icon: "fa fa-upload", linkName: "Import Contacts" },
                  { state: "app.templates", icon: "fa fa-table", linkName: "Templates" },
                  { state: "app.users", icon: "fa fa-user", linkName: "Users" },
                  { state: "app.locations", icon: "fa fa-bus", linkName: "Locations" },
                  { state: "app.campaigns", icon: "fa fa-edit", linkName: "Campaigns" },
                  { state: "app.creditRequests", icon: "fa fa-wrench", linkName: "Credit Requests" },
                  { state: "app.coupons", icon: "fa fa-sitemap", linkName: "Coupons" },
    ];

    this.groups = [
      'Family',
      'Friends',      
      'My Group',
      'Test Group',
      'Group1',
      'My Group2'      
    ];

}
