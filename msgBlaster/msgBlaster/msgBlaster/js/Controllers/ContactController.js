
App.controller('ContactController', function ($scope, $routeParams, $rootScope, $state, $filter, ContactService, GroupService) {

    $scope.ExistingContact = "false";
    $scope.InValidAnniversary = false;
    $scope.groupList = [];
    $scope.mode;

    $scope.Contact = {
        "Id": "",
        "ClientId": 1,
        "GroupId": "",  //$scope.Groups[0].Id
        "FirstName": "",
        "LastName": "",
        "MobileNumber": "",
        "Gender": "Male",
        "BirthDate": "",
        "AnniversaryDate": ""
    };

    //Create Contact
    $scope.save = function (Contact, valid, InValidAnniversary) {

        if (valid && ($scope.ExistingContact == "false") && (InValidAnniversary == false)) {

            Contact.BirthDate = $filter('date')(Contact.BirthDate, "dd-MMM-yyyy");
            Contact.AnniversaryDate = $filter('date')(Contact.AnniversaryDate, "dd-MMM-yyyy");
            Contact.Groups = $scope.groupList;
            var contact = ContactService.createContact(Contact);
            contact.then(function (data) {
                $scope.isSave = false;
                toastr.success('Contact created successfully!');
                $state.go('app.contacts');
            }, function (error) {
                toastr.error('There is an error while creating contact');
            });
        }
    }

    //validate Anniversary
    $scope.validateAnniversary = function (birthDate, anniversaryDate) {

        birthDate = moment(birthDate).format("YYYY-MM-DDTHH:mm:ssZ");
        anniversaryDate = moment(anniversaryDate).format("YYYY-MM-DDTHH:mm:ssZ");
        var birthDateTemp = moment(birthDate);
        var anniversaryDateTemp = moment(anniversaryDate);
        var days = moment.duration(anniversaryDateTemp.diff(birthDateTemp)).asDays();
        if (anniversaryDate != "" && anniversaryDate != null) {

            if (days < 0) {
                $scope.InValidAnniversary = true;
            } else {
                $scope.InValidAnniversary = false;
            }
        }
    }

    //Load groupList 
    var groups = GroupService.getGroupList(1);
    groups.then(function (data) {
        $scope.Groups = data;
    });

    //Check single group
    $scope.selectGroups = function (group, index) {
        if (group.IsChecked) {
            $scope.someSelected = true;
            $scope.groupList.push(group);          
        }
        else {
            for (var i = 0; i < $scope.groupList.length; i++) {

                if ($scope.groupList[i].Id == group.Id) {
                    $scope.groupList.splice(i, 1);
                    alert(JSON.stringify($scope.groupList));
                }
            }
            if ($scope.groupList.length == 0) {
                $scope.someSelected = false;
            }
        }
    }

    //Check all groups
    $scope.selectAll = function (group, index) {

        if (group.IsAllChecked) {
            $scope.allSelected = true;
            $scope.groupList = $scope.Groups;
        } else {
            $scope.allSelected = false;
            $scope.groupList = [];
        }
    }


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

    //  $scope.data = ej.DataManager({ url: "http://localhost:63138//api/Contact/GetContactsbyClientId?clientId=1", adaptor: "WebApiAdaptor", offline: true });

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