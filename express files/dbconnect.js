const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Docked successfully!");
    const dbo = db.db('employee');
    dbo.collection('manager').find().toArray(function(err,result){
        if (err) throw err;
        module.exports.res = result;
        db.close();
    });
});