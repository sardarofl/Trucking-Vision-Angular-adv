const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Set = require('../models/set');

//add category
router.post('/set_desc_title',function(req,res){
	//var req = req;
	//var res = res;
	var title = req.body.title;
	var desc = req.body.desc;
	var id = req.body.id;
	Set.Set(title, desc, id, res,function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

module.exports = router;
