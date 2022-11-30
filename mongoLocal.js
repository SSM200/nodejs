//Nodejs mongodb connection and create database

const MongoClient = require('mongodb').MongoClient; //Mongo client required to connect to local instance
var url = "mongodb://127.0.0.1:27017/employee"; //default url for mongo

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("nodedb");
    dbo.createCollection("Student",function(err,res){
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

//Fetching the records
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodedb");
    dbo.collection("Student").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});