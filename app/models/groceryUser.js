var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var newUser = sequelize.define("users",{
    groceryUser:{
        type:Sequelize.STRING
    }
});

newUser.sync()
module.exports=newUser;