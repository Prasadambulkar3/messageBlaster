App.service('LoginService', function (DataAccessService) {

    this.SignIn = function (User) {

        var paramObject = { "AccessId": 1, "Email": User.Email, "Password": User.Password };

        var promise = DataAccessService.postDataWithParams("api/User/UserSignIn", paramObject);

        return (promise);
    };

});