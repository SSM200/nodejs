const mysql = require('mysql');
const mongo = require('mongo');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

var con1 = mongo.createConnection({
  host: "localhost",
  user: "username",
  password: "mypassword",
  database: "mongo"
});


con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";


  //Users : Name=q,Pid:12;
  //Product: Name:Pen, ProductId=12;
  //ON Users.Pid=Product.ProductId(12=12)

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});