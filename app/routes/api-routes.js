var newGrocery = require("../models/groceryItems.js");
var newUser = require("../models/groceryUser.js");
var Items = require("../models/items.js")
var fs = require("fs");


module.exports= function(app){

    app.get("/api/list",function(req,res){      
        newGrocery.findAll({}).then(function(results)
        {
            res.send(results);
        })    
    });

    app.get("/api/items", function(req,res){
        Items.findAll({}).then(function(results){
            res.send(results);
        })
    })

    app.put("/api/list",function(req,res)
    {
        newGrocery.update({
        groceryItem:req.body.groceryItem,
        quantity:req.body.quantity,
        user:req.body.user
    },{

    where:{
        id:req.body.id
          }
    }).then(function(response){
    res.json(response);
        })
    })



     app.get("/LL" ,function( req, res)
     {
        newUser.findAll({}).then(function(results){
            res.json(results);
        });
    });





    app.post("/newuser",function(req,res)
    {
        newUser.create({
            groceryUser:req.body.groceryUser
                      });    
    });

   

    app.post("/newItem",function(req,res)
    {
      
        newGrocery.create({
            groceryItem: req.body.groceryItem,
            quantity:req.body.quantity,
            user:req.body.user
                         });

        Items.create({
            name:req.body.groceryItem,
            count:+1    
                    });    
    });

    app.post("/api/delete",function(req,res)
    {
        console.log("ppp"+ req.body.in);
        newGrocery.destroy({
            where:{
                id:req.body.in
                  }
                           });
    });
}