const config = require('../config/database');
const mysql = require('mysql');

const Fetch_Items={

  getAllCategories:function(callback){
  return config.query("SELECT * from categories",callback);
  },
  getProductsByCategory:function(category,callback){
  return config.query("SELECT * from products WHERE categorie=?",[category],callback);
  },
  getAllProducts:function(callback){
  return config.query("SELECT * from products",callback);
  },
  getAllProductMedia:function(callback){
  return config.query("SELECT * from product_media",callback);
  },
  getProductMediaByID:function(id,callback){
  return config.query("SELECT * from product_media WHERE id=?",[id],callback);
  }
};


module.exports=Fetch_Items;
