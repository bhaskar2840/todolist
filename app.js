// jshint esversion:6

const express=require("express");

const app=express();

var items = []; // global variable


app.set("view engine","ejs"); // we have to make (views folder and the file inside should be of ejs
// this is the default way to write the ejs programme.

app.get("/" ,function(req,res){

    var today = new Date();

    var options ={weekday : "long",
day:"numeric", month:"long"};

var day = today.toLocaleDateString("en-US",options);

res.render("list", {daytoday:day,newListItems:items}); // we can only render once as list will not consider multiple
// that is why we created an array of items in post and then we will loop through it and will add each  item at once  

    

});

app.post("/",function(req,res){
    let item = req.body.newItems;

    items.push(item);

    res.redirect("/") // redirect the post request to the root/home route.
})
app.listen(3000,function(res,req){
    console.log("server is up and running")
})



// var currentDay=today.getDay();
// var day="";

// switch (currentDay) {
//     case 0:
//         day="sunday"
//         break;
//     case 1:
//         day="monday"
//         break;
//     case 2:
//         day="tuesday"
//         break;
//     case 3:
//         day="wednesday"
//         break;
//     case 4:
//         day="thrusday"
//         break;
//     case 5:
//         day="friday"
//         break;
//     case 6:
//         day="satday"
//         break;

//     default:
//         console.log("you have entered a wrong day!")
//         break;
// }

// res.render("list",{daytoday:day}); // this the res.send alternative used for ejs

