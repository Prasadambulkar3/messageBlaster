
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


App.controller('TemplateController', function ($scope, $rootScope, $modal, $modalInstance) {

    var clientId = $rootScope.loggedPerson.ClientId;
    $scope.characterCount = 0;
   

    $scope.save = function (Template, valid, title) {

        if (valid && (title == 'false')) {
            Template.ClientId = $rootScope.loggedPerson.ClientId;
            var template = TemplateService.createTemplate(Template);

            template.then(function (data) {
                console.log("success");
                $modalInstance.dismiss();
                toastr.success('Template edited successfully!');
                $route.reload();

            }, function (error) {
                console.log("error");
                toastr.error('There is an error while editing template');
            });

        }
    }  

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }

});
