const mysql = require("mysql");


module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 's1591987S',
  database: 'formulaUno',
  port:3306
});
