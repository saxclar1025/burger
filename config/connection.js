var mysql = require("mysql");

var source = {
  localhost: {
    port: 3306,
    host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "p7eala3a5gfse51n",
    password: "qcxhbbruaxlid82g",
    database: "q8lijfr0ttazw2ew"
  }
};

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;