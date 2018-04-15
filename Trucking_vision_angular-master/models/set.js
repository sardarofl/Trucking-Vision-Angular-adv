const config = require('../config/database');
const mysql = require('mysql');
var path = require('path');

//adding items

const Set_Desc_Title={

  Set:function(title, desc, id, res,callback){
    var data = {
      "Data":""
    };

    console.log(id);
    config.query("UPDATE product_media SET title = ?, description = ? WHERE src LIKE'%"+id+"%'", [title,desc], function (err, result) {

     if (err) throw err;
     res.json(data);
    });
  }

};


module.exports=Set_Desc_Title;
