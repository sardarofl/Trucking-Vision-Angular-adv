const mysql = require('mysql');

var connection = mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'trucking'
	});

module.exports=connection;
