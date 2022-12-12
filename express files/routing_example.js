var express = require('express');//module
var app = express(); //instead of directly calling a module we focus on the app variable

//no specific path specified
app.get('/',function(req,res){
    console.log("GET");
    res.send("I AM GET");
})

//difference is in path: /student
app.get('/',function(req,res){
    console.log("GET THE STUDENTS FROM /STUDENT");
    res.send("I AM A STUDENT");
})

//This is a GET request for: abxcd,ab123cd and so on...
app.get('/ab*cd',function(req,res){
    console.log("GET FOR QUERY STRING");
    res.send("Pattern matching")
})


app.post('/',function(req,res){
    console.log("POST");
    res.send("I AM POST");
})


var server=app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host+port); // + is to concatenate or add it as a part of request URL.
})

app.delete('/del_student',function(req,res){
    console.log("I AM DELETE");
    res.send("I AM DELETED");
})

