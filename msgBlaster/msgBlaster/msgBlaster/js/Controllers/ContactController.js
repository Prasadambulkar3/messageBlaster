
App.controller('ContactController', function () {


});

App.controller('ContactListController', function () {

    var newColumns = [
                          { field: "Name", headerText: "Name", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "MobileNumber", headerText: "Number", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "Email", headerText: "Email", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "BirthDate", headerText: "Birthdate", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "AnniversaryDate", headerText: "Anniversary ", width: 75, textAlign: ej.TextAlign.Right },
                          { field: "Gender", headerText: "Gender ", width: 75, textAlign: ej.TextAlign.Right },
    ];

    this.columns = newColumns;

    this.tools = { showToolbar: false, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.ExcelExport, ej.Grid.ToolBarItems.WordExport, ej.Grid.ToolBarItems.PdfExport, ej.Grid.ToolBarItems.PrintGrid] };

    this.data = ej.DataManager({ url: "http://192.168.1.52/msgblasterApi/api/Contact/GetContactsbyClientId?clientId=1", adaptor: "WebApiAdaptor", offline: true });

    this.allowpaging = { allowPaging: true };

    this.pagesettings = { pageSize: 11 };

    this.edittsetings = { allowEditing: true, editMode: ej.Grid.EditMode.Normal };

    //For adjust width of column
    this.allowResizing = { allowResizing: true };

    //For reorder using drag and drop
    this.allowReordering = { allowReordering: true };

    this.allowsorting = { allowSorting: true };

    this.sortsettings = { sortedColumns: [{ field: "Id", direction: ej.sortOrder.Ascending }] }

    this.actionBegin = function (args) {
        if (args.requestType == "beginedit") {
            LeadListController.prototype.IdValue = args.model.currentViewData[args.rowIndex].LeadID;
            console.log(args.model.currentViewData);

            $state.go('system.Lead');
            args.cancel = true;
        }
    }

    this.toolbarHandler = function (e) {
        this.exportGrid = this["export"];
        if (e.itemName == "Add") {
            $state.go('system.Lead');
            e.cancel = true;
        }

        else if (e.itemName == "Excel Export") {
            this.exportGrid('http://localhost:49501/api/program/ExcelExport')
            e.cancel = true;
        }
        else if (e.itemName == "Word Export") {
            this.exportGrid('http://localhost:49501/api/program/WordExport')
            e.cancel = true;
        }
        else if (e.itemName == "PDF Export") {
            this.exportGrid('http://localhost:49501/api/program/PdfExport')
            e.cancel = true;
        }
    }

});