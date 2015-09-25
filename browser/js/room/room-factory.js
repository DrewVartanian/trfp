app.factory('RoomFactory', function($http) {
    var getRoom = function(roomId) {
        return $http.get('/api/rooms/' + roomId)
            .then(function(res) {
                return res.data;
            });
    };

    var createRoom = function(roomName,owner){
      return $http.post('/api/rooms',{roomName:roomName,owner:owner._id})
            .then(function(res){
              return res.data;
            });
    };

    var getMyRooms = function() {
        return $http.get('/api/rooms/myRooms')
            .then(function(res) {
                return res.data;
            });
    };

    var saveAndRender = function(room) {
      return $http.put('/api/rooms/code',{room:room})
            .then(function(res) {
              return res.data;
            });
    };

    var addMember = function(room,email) {
      return $http.put('/api/rooms/member/add',{roomId:room._id,email:email})
            .then(function(res) {
              return res.data;
            });
    };

    var removeMember = function(room,memberId) {
      return $http.put('/api/rooms/member/remove',{roomId:room._id,memberId:memberId})
            .then(function(res) {
              return res.data;
            });
    };

    return{
        getRoom:getRoom,
        createRoom:createRoom,
        getMyRooms:getMyRooms,
        saveAndRender:saveAndRender,
        addMember:addMember,
        removeMember:removeMember
    };
});