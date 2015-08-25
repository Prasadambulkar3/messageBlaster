
App.controller('LocationController', function ($scope) {

    //alert("ContactController");
    $scope.addingLocation = true;

    $scope.createLocation = function (locationName) {
        $scope.locationName = "";
        //var data = {};
        //data.Name = locationName;
        //data.ClientId = 1;
        //var grp = LocationService.createLocation(data);


        //grp.then(function (data1) {
        //    if (data1 != 0) {
        //        toastr.options = { "positionClass": "toast-bottom-right" }
        //        toastr.success('Success', 'Location created successfully!')

        //        data.Id = data1;
        //        var gridObj = $("#Grid").ejGrid("instance");
        //        gridObj.model.currentViewData.push(data);
        //        gridObj.refreshContent();
        //    }
        //}, function (error) {
        //    console.log("error");
        //});
        $scope.addingLocation = true;
    }
});
