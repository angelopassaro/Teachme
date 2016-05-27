//added
var loopback = require('loopback');
// changed password hidden in user.json(node_module/loopback/common)
module.exports = function(Student) {

/*
//added
  function getCurrentUserId() {
    var ctx = loopback.getCurrentContext();
    var accessToken = ctx && ctx.get('accessToken');
    var userId = accessToken && accessToken.userId;
    return userId;
  }

//added
  Student.example = function(cb){
    var userId = getCurrentUserId();
    if(!userId){
      // Code if valid access token not found
    }else{

    }
  }

  //add remote method  example
*/
}
