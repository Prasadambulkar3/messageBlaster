

function GroupController(GroupService, $route, $location, $http) {

    this.addingGroup = true;

    this.createGroup = function (groupName) {
        this.groupName = "";
        var data = {};
        data.Name = groupName;
        data.ClientId = 1;
        var grp = GroupService.createGroup(data);


        grp.then(function (data1) {
            if (data1 != 0) {
                toastr.options = { "positionClass": "toast-bottom-right" }
                toastr.success('Success', 'Group created successfully!')

                data.Id = data1;
                var gridObj = $("#Grid").ejGrid("instance");
                gridObj.model.currentViewData.push(data);
                gridObj.refreshContent();
            }
        }, function (error) {
            console.log("error");
        });
        this.addingGroup = true;        
    }

    this.data = [];
    this.columns = [
                            { field: "Id", headerText: "ID", isPrimaryKey: true, textAlign: ej.TextAlign.Right, width: 75, visible: false },

                            { field: "ClientID", headerText: "ClientID", isPrimaryKey: true, textAlign: ej.TextAlign.Right, width: 75, visible: false },

                            { field: "Name", headerText: "Group Name", width: 90 },

                            {
                              
                                    headerText: "",
                                    commands: [
                                        
                                        { type: ej.Grid.UnboundType.Edit, buttonOptions: { text: "Edit" } },
                                        { type: ej.Grid.UnboundType.Delete, buttonOptions: { text: "Delete" } },
                                        { type: ej.Grid.UnboundType.Save, buttonOptions: { text: "Save" } },
                                        { type: ej.Grid.UnboundType.Cancel, buttonOptions: { text: "Cancel" } }
                                    ],
                                    isUnbound: true, width: 130, textAlign: ej.TextAlign.Right
                                }
                            ];  

    //var d = GroupService.getGroupList(1);

    //proxy = this;

    //d.then(function (response) {
    //    console.log(response)
    //    console.log(response.Items)
    //    console.log(response.result)

    //    GroupController.prototype.data = response.result;

    //    proxy.data = response.result;

    //    console.log("success");

    //}, function (error) {

    //    console.log("error");

    //});



    //var d = $http.get("http://localhost:63138/api/Group/GetGroupListByClientId?accessid&clientId=1", { cache: true });

    //d.then(function (response) {
    //    console.log(response.data)
    //    this.data = response.data.result;
    //    console.log("success");
    //}, function (error) {
    //    console.log("error");
    //});

    this.data = ej.DataManager({ url: "http://localhost:63138/api/Group/GetGroupListByClientId", adaptor: "WebApiAdaptor" }), 

    this.query = new ej.Query().addParams('clientId', '1').addParams('accessId', '1');

    this.edittsetings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false };

    //this.allowsorting = { allowSorting: false };

    //this.sortsettings = { sortedColumns: [{ field: "Name", direction: ej.sortOrder.Ascending }] }



    this.complete = function (args) {

        if (args.requestType == "save") {
            alert(JSON.stringify(args))
            console.log("success");
        }

        console.log(args);

        if (args.requestType == "delete") {
            //alert(JSON.stringify(args))
            // console.log(args)
            toastr.options = { "positionClass": "toast-bottom-right" }
            toastr.success('Success', 'Group deleted successfully!')
        }

       
    }

    this.editHandler = function () {

        alert("end")
    }
}