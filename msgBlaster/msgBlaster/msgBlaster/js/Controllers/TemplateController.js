
App.controller('TemplateListController', function ($scope, $modal) {

    $scope.modal = function () {
        $modal.open({
            controller: 'TemplateController as template',
            templateUrl: '../msgBlaster/views/template/create/createTemplate.html',
            windowClass: "animated fadeIn"
            //windowClass: "animated flipInY"
        });
    };
});


App.controller('TemplateController', function ($scope, $modal, $modalInstance) {

    $scope.save = function () {
        //CommonService.updateProfileData(data);
        $modalInstance.close();
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }

});
