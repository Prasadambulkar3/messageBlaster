
App.controller('TemplateListController', function ($modal) {

    this.modal = function () {
        $modal.open({
            controller: 'TemplateController as template',
            templateUrl: '../msgBlaster/views/template/create/createTemplate.html',
            windowClass: "animated fadeIn"
            //windowClass: "animated flipInY"
        });
    };
});


App.controller('TemplateController', function ($modal, $modalInstance) {

    this.save = function () {
        //CommonService.updateProfileData(data);
        $modalInstance.close();
    }

    this.cancel = function () {
        $modalInstance.dismiss('cancel');
    }

});
