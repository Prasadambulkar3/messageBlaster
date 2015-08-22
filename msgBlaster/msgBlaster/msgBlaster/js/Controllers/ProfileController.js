
App.controller('profileController', function ($modalInstance, CommonService) {
    var d = CommonService.profileData()

    d.then(function (data) {
        profileController.prototype.ProfileData = data;
        console.log("success");
    }, function (error) {
        console.log("error");
    });

    this.save = function (data) {
        CommonService.updateProfileData(data);
        $modalInstance.close();
    }

    this.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
});
