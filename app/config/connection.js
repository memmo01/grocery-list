var Sequelize = require("sequelize");
var sequelize = new Sequelize("grocery_db","root","P#AGOs18",{
    host:"localhost",
    dialect:'mysql'
});




module.exports=sequelize;