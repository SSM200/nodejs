const MongoClient = require('mongodb').MongoClient; //mongo client is required to connect to local instance
var url = "mongodb://127.0.0.1:27017"; //default url for mongo

//Updating the records and fetching it in MongoDB using nodejs
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodedb");
    dbo.collection("Student").updateOne({"name" : "Sarvesh"} , {$set: { "position" : "Student"}}, function(err, result) {
      if (err) throw err;
      console.log("Updated Successfully!")
      console.log(result);
    });

    //Checking the updation
    dbo.collection("Student").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
});