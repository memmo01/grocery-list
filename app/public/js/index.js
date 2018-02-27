


start();
       function start(){
    $.get("/api/list",function(data){
       
                for(i=0;i<data.length;i++){
                     
                    var tt={
                        user:data[i].user,
                        groceryItem:data[i].groceryItem,
                        quantity:data[i].quantity,
                        id:data[i].id
                    }
                    run(tt);

                   
                }

                function run(some, id){
                var id = some.id
                    var newRow = $("<tr>");
                      newRow.addClass("theData");
                        newRow.append("<td>"+some.groceryItem+"</td>"+"<td>"+some.quantity+"</td>"+"<td>"+some.user+"</td>")
                   
                        var editButton = $("<button>");
                                editButton.text("edit");
                                editButton.addClass("editButton")
                                editButton.attr("data-id",id)
                        var deleteButton = $("<button>");
                                deleteButton.text("delete");
                                deleteButton.addClass("deleteButton")
                                deleteButton.attr("data-delete",id);

                                newRow.append(editButton);
                                newRow.append(deleteButton);

                        $("#putHere").append(newRow)
                }

                $(".deleteButton").on("click",function(){

    var info ={
        in:($(this).data("delete"))
    } ;
   
    $.post("/api/delete",info).done(function(){
       
    });
   
    location.reload();
})


$(".editButton").on("click",function(){
    var u= $(this).data("id")

    var sepData= [];

    $.get("/api/list",function(data){
        for(i=0;i<data.length;i++){
            if(data[i].id === u){
               var t = $("<div>");
                 t.addClass("updating");

        

               
        var x ="<input id ='grocItem' value="+data[i].groceryItem+"><input id='quant'value="+data[i].quantity+"><input id ='userr' value="+data[i].user+">";
            x +="<button id ='submitt'>Submit</button><a href='/'><button id='cancelButton'>Cancel</button></a>"
            
            $(t).append(x);

var editList = "<h1>Edit Item</h1>"

   $(".list").html(t) 
   $(".links").hide();
   $(".title").html(editList);
   
   
            }
        }
         $("#submitt").on("click",function(){
             var groceryItem =$("#grocItem").val().trim()
             var quantity = $("#quant").val().trim()
             var user= $("#userr").val().trim()

           var trial={
            groceryItem:groceryItem,
            quantity:quantity,
            user:user,
            id:u
            }

        $.ajax({
            url:"/api/list",
            method:"PUT",
            data:trial
        }).done(function(){
            alert("transfering")

            location.reload();
        })
        

   })
    })  
})
        });
       }


