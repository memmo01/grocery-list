var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var newGrocery = sequelize.define("groceryList",{
    groceryItem:{
        type:Sequelize.STRING
    },
    quantity:{
        type:Sequelize.TEXT
    },
    user:{
        type:Sequelize.STRING
    }
    });



    newGrocery.sync()



module.exports= newGrocery;