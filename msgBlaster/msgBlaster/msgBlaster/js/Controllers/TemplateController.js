/// <reference path="../../views/template/create/createTemplate.html" />


function TemplateListController($modal) {

    this.modal = function () {
        $modal.open({
            controller: 'TemplateController as template',
            templateUrl: '../msgBlaster/views/template/create/createTemplate.html',
            windowClass: "animated fadeIn"
            //windowClass: "animated flipInY"
        });
    };
}

function TemplateController($modal, $modalInstance) {

    this.save = function () {
        //CommonService.updateProfileData(data);
        $modalInstance.close();
    }

    this.cancel = function () {
        $modalInstance.dismiss('cancel');
    }

}
