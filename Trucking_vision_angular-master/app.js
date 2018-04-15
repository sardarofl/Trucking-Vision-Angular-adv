const express   = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require("body-parser");
var cors=require('cors');
const config = require("./config/database")
const passport = require('passport');

//express
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//port
const port = process.env.PORT || 3000;

//cors
app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cross origin enabler
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//index route
app.get('/',(req,res) =>{
  res.send('Invalid Endpoint');
})


//securing try
function requireLogin(req, res, next) {
  if (req.session.loggedIn) {
    next(); // allow the next route to run
  } else {
    // require the user to log in
    res.redirect("/"); // or render a form, etc.
  }
}


//routers
const fetch = require('./routes/fetchs');
const add = require('./routes/adds');
const d_delete = require('./routes/deletes');
const s_set = require('./routes/sets');

//use routers
app.use('/fetchs',fetch);
app.use('/adds',add);
app.use('/deletes',d_delete);
app.use('/sets',s_set);


app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/edit',function(req,res){
  res.sendFile(path.join(__dirname+'/public/edit_product.html'));
});

app.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname+'/public/edit_product_gallery.html'));
});

app.get('/VisionTrucking',function(req,res){
  res.sendFile(path.join(__dirname+'/public/front_end/index.html'));
});

app.get('/ProductGallery',function(req,res){
  res.sendFile(path.join(__dirname+'/public/front_end/product.html'));
});

app.listen(port,  () => {
  console.log('Server started on port'+port);
});
