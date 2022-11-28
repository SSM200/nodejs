const mysql = require('mysql');//import mysql module for db connection
const mongo = require('mongodb');//import mongo for database connection
const redis = require('redis');//import redis for database connection

//specific to your project DB
var con = mysql.createConnection({
  host: "localhost",//your project hostname to which your system has access
  user: "yourusername",//username to connect with the db
  password: "yourpassword"//password to connect to DB
});

var con1 = mongo.createConnection({
    host: "localhost",//your project hostname to which your system has access
    user: "yourusername",//username to connect with the db
    password: "yourpassword"//password to connect to DB
  });

var con2 = redis.createConnection({
  host: "localhost",//your project hostname to which your system has access
  user: "yourusername",//username to connect with the db
  password: "yourpassword"//password to connect to DB
});

//connects with the above mentioned DB details
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

con2.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  con2.query("SET employee" , function(err,result){
    if (err) throw err;
    console.log("Database created");
  });
});