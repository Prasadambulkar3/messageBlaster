
function GroupService(DataAccessService, $resource) {

    this.getList = function (clientId) {
        $resource('http://localhost:63138/api/Group/GetGroupListByClientId:' + 'clientId', {}, {
            'update': { method: 'PUT' }
        })
    }


    this.getGroupList = function (ClientId) {
        var paramObject = { "AccessId": "1", "ClientId": ClientId }
        var data = DataAccessService.getDataWithParams('api/Group/GetGroupListByClientId', paramObject);
        return (data);
    };

    this.createGroup = function (object) {
        var paramObject = { "AccessId": "1" }
        var promise = DataAccessService.postDataWithObjectAndParams('api/Group/CreateGroup', object, paramObject);
        return promise;
    };

    this.editGroup = function (object) {
        var paramObject = { "AccessId": "1" }
        var promise1 = DataAccessService.postDataWithObjectAndParams('api/Group/EditGroup', object, paramObject);
        return promise1;
    };
    
    this.deleteGroup = function (Id) {
        var paramObject = { "Id": Id };
        var data = DataAccessService.postDataWithParams('api/Group/RemoveGroup', paramObject);
        return (data);
    }
}
