var Sequelize = require('sequelize');
var sequelize = require("../config/connection.js");


var Items = sequelize.define("item",{
    name:{
        type:Sequelize.STRING,
        unique:true
    },
    count:{
        type:Sequelize.INTEGER
    }
});

Items.sync();
module.exports= Items;