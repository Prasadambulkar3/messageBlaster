
App.controller('ContactController', function ($scope, GroupService) {

    var groups = GroupService.getGroupList(1);

    groups.then(function (data) {     
        $scope.Groups = data;        
    });  
});

App.controller('ContactListController', function ($scope) {
    var newColumns = [
                          { field: "Name", headerText: "Name", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "MobileNumber", headerText: "Number", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "Email", headerText: "Email", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "BirthDate", headerText: "Birthdate", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "AnniversaryDate", headerText: "Anniversary ", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "Gender", headerText: "Gender ", width: 75, textAlign: ej.TextAlign.Right },
    ];

    $scope.columns = newColumns;

    $scope.tools = { showToolbar: false, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.ExcelExport, ej.Grid.ToolBarItems.WordExport, ej.Grid.ToolBarItems.PdfExport, ej.Grid.ToolBarItems.PrintGrid] };

    $scope.data = ej.DataManager({ url: "http://192.168.1.52/msgblasterApi/api/Contact/GetContactsbyClientId?clientId=1", adaptor: "WebApiAdaptor", offline: true });

    $scope.allowpaging = { allowPaging: true };

    $scope.pagesettings = { pageSize: 11 };

    $scope.edittsetings = { allowEditing: true, editMode: ej.Grid.EditMode.Normal };

    //For adjust width of column
    $scope.allowResizing = { allowResizing: true };

    //For reorder using drag and drop
    $scope.allowReordering = { allowReordering: true };

    $scope.allowsorting = { allowSorting: true };

    $scope.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }

    $scope.actionBegin = function (args) {
        if (args.requestType == "beginedit") {
            LeadListController.prototype.IdValue = args.model.currentViewData[args.rowIndex].LeadID;
            console.log(args.model.currentViewData);

            $state.go('system.Lead');
            args.cancel = true;
        }
    }

    $scope.toolbarHandler = function (e) {
        $scope.exportGrid = $scope["export"];
        if (e.itemName == "Add") {
            $state.go('system.Lead');
            e.cancel = true;
        }

        else if (e.itemName == "Excel Export") {
            $scope.exportGrid('http://localhost:49501/api/program/ExcelExport')
            e.cancel = true;
        }
        else if (e.itemName == "Word Export") {
            $scope.exportGrid('http://localhost:49501/api/program/WordExport')
            e.cancel = true;
        }
        else if (e.itemName == "PDF Export") {
            $scope.exportGrid('http://localhost:49501/api/program/PdfExport')
            e.cancel = true;
        }
    }

});