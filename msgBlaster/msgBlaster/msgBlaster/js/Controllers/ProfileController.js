
App.controller('profileController', function ($scope, $modalInstance, CommonService) {
    var d = CommonService.profileData()

    d.then(function (data) {
        profileController.prototype.ProfileData = data;
        console.log("success");
    }, function (error) {
        console.log("error");
    });

    $scope.save = function (data) {
        CommonService.updateProfileData(data);
        $modalInstance.close();
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
});
