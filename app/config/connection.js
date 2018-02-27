var Sequelize = require("sequelize");
var sequelize = new Sequelize("grocery_db","root","PASSWORD",{
    host:"localhost",
    dialect:'mysql'
});




module.exports=sequelize;