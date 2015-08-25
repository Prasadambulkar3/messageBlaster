

App.service('ContactService', function (DataAccessService) {

    this.createContact = function (object) {
        var paramObject = { "AccessId": "1" }
        var promise = DataAccessService.postDataWithObjectAndParams('api/Contact/CreateContact', object, paramObject);
        return promise;
    };

});


