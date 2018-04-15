const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Fetch = require('../models/fetch');


//fetch
router.get('/fetch_categories',function(req,res){
	Fetch.getAllCategories(function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});


router.get('/fetch_products/:category',function(req,res){
	var category = req.params.category;
	Fetch.getProductsByCategory(category, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

router.get('/fetch_products',function(req,res){
	Fetch.getAllProducts(function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

router.get('/fetch_products_media',function(req,res){
	Fetch.getAllProductMedia(function(err,rows){
         if(err) return res.json(err);
              res.json(rows);
    });
});

router.get('/fetch_products_media/:id',function(req,res){
	var id = req.params.id;
	Fetch.getProductMediaByID(id,function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});



module.exports = router;
