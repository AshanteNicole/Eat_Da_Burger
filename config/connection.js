//var express = require("express");
//var exphbs = require("express-handlebars");

//var app = express();

//var PORT = process.env.PORT || 8080;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//data
//var burgers = [
   // {
       // id: 1,
       // burger_name: 'Double Cheese Burger',
       // devoured: true
   // },
   // {
       // id: 2,
       // burger_name: 'Pickled Burger',
       // devoured: true,
   // },
    //{
       // id: 3,
        //burger_name: 'Salmon Burger',
        //devoured: true,
   /// },
//]


//app.get("/", function(req, res) {
    //res.render('index', {data: burgers})
   // })