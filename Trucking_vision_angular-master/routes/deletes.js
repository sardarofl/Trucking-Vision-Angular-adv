const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Delete = require('../models/delete');

//delete category
router.delete('/delete_category/:id/:category',function(req,res){
	var item = req.params.id;
	var category = req.params.category
	var res = res;
	Delete.DeleteFromCategories(item, category,res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

//delete product
router.delete('/delete_product/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromProducts(item,res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

//delete from gallery
router.delete('/delete_from_gallery/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromGallery(item,res, function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});



module.exports = router;
