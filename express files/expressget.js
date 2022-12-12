const express = require('express');
const app = express();
const connection = require('./dbconnect');

app.get('./users',function(req,res){
    res.send(connection);
});

app.listen(8000,function(req,res){
    if (err) throw err;
    console.log("Listening at the port number:8000");
});