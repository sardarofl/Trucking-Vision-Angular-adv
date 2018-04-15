const config = require('../config/database');
const mysql = require('mysql');
var path = require('path');

//delete items

const Delete_Items={

  DeleteFromCategories:function(item,category,res, callback){
  var data = {
    "Data":""
  };
  config.query("DELETE FROM categories WHERE id = '"+item+"'", function (err, result) {
   if (err) throw err;

  });
  console.log(category);
  config.query("DELETE FROM products WHERE categorie = '"+category+"'", function (err, result) {
   if (err) throw err;

  });

  config.query("DELETE FROM product_media WHERE id = '"+item+"'", function (err, result) {
   if (err) throw err;
   res.json(data);
  });
  },

  DeleteFromProducts:function(item, res, callback){

    var data = {
      "Data":""
    };
    config.query("DELETE FROM products WHERE id = '"+item+"'", function (err, result) {
     if (err) throw err;

    });

    config.query("DELETE FROM product_media WHERE id = '"+item+"'", function (err, result) {
     if (err) throw err;
     res.json(data);
    });
  },
  DeleteFromGallery:function(item, res, callback){
    var data = {
      "Data":""
    };
    config.query("DELETE FROM product_media WHERE src = '"+item+"'", function (err, result) {
     if (err) throw err;
     res.json(data);
    });
  },

};


module.exports=Delete_Items;
