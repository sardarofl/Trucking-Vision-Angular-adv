var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

//set up template engine

app.set('view engine', 'ejs');

//static lockfileVersion
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
