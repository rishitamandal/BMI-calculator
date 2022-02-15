//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");// route
});

app.post("/bmicalculator",function(req,res){
  var num1=parseFloat(req.body.weight);
  var num2=parseFloat(req.body.height);
  var result=num1/(num2*num2);
  res.send("The BMI is: "+result);
});

app.listen(3000 , function(){
  console.log("Server started on port 3000");
});
