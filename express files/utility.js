const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.json());

var database;

app.get('/',function(req,res){
    res.send("You are not at user route just switched to user");
})

app.get('/users',function(req,res){
    database.collection("studentdetails").find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.listen(3000,function(){
    console.log("Server is running at 3000 port");
    MongoClient.connect("mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000",(err,res)=>{
        if(err) throw err;
        database = res.db("student");
        console.log("Connected to the database");
    });
});