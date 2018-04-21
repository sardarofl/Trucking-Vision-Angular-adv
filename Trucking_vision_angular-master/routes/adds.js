const express = require('express');
const router = express.Router();

const config = require('../config/database');

const Add = require('../models/add');



//add category
router.post('/add_category',function(req,res){
	var req = req;
	var res = res;
	Add.AddToCategories(req, res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

/////////add product image and data
router.post('/add_product',function(req,res){
	var req = req;
	var res = res;
	Add.AddToProducts(req, res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

//add multiple images for gallerys
router.post('/add_gallery',function(req,res){
		console.log("adding to gallery "+req);
	var req = req;
	var res = res;
	Add.AddToGallery(req, res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

//add videos
router.post('/add_video',function(req,res){
	var req = req;
	var res = res;
	Add.AddVideoToGallery(req, res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
		 });
});

module.exports = router;
