


var people=[];
 var itms=[];
        
        start();

        function start(){
          var newest=[];
         

            $.get("/api/list",function(data){
                newest.push(data[data.length-1].user);
            })
            $.get("/api/items",function(data){
                for(i=0;i<data.length;i++){
                    itms.push(data[i].name);
                }
            })

            $.get("/LL",function(data){
                    for(e=0;e<data.length;e++){
                        people.push(data[e].groceryUser);
                    }
            }).done(function(){

            var x = $("<form>");
                x.addClass("submitItem");
                
                $(".inhere").append(x)

                
                
                var option=""
                for(i=0;i<people.length;i++)
                        {
                            
                        option +='<option value='+people[i]+'>'+people[i]+'</option>';

                        }   
                    
                        var select ="<select id='user'><option value="+newest[newest.length-1]+">"+newest[newest.length -1]+'</option>'+option+"</select>"


                $(".submitItem").append(select);

                
                
               
                $(".submitItem").append("<input id='item' placeholder='Enter Item'>")
                $(".submitItem").append("<input id='quantity' placeholder='Enter quantity'>");
                $(".submitItem").append("<input type='submit' id='submit' placeholder='submit'>")
                
               

                
        

        $("#submit").on("click",function(){
            
            var user = $("#user").val()
     
            var groceryItem = $("#item").val().trim();
            var quantity = $("#quantity").val().trim();
        
             newest.push(user);
            


            var newPost ={
                user:user,
                groceryItem:groceryItem,
                quantity:quantity,
              

            }
           

            
            $.post("/newItem",newPost,function(){
                alert("information loaded into database");
            })
            



        });
        })

        }

        $("#newUser").on("click",function(){
            var x = "<input id='newUser' value='Enter user name'>"
                x += "<button id='submitUser'>submit</button>"
            $(".addUser").html(x)

            
        $("#submitUser").on("click",function(){
            alert("added user");
           var groceryUser = $("#newUser").val().trim()
            var x ={
                groceryUser:groceryUser
            }

            $.post("/newuser",x,function(){
                
            });
            $("#newUser").val("")
            location.reload();
        })
        })

    