const config = require('../config/database');
const mysql = require('mysql');
var multer  =   require('multer');
var path = require('path');

//multer
var filename_path;
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },

  filename: function (req, file, callback) {
    //console.log(req);
    filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({ storage : storage}).single('image');
var multiple_upload = multer({ storage : storage}).array('image');

//adding items

const Add_Items={

  AddToCategories:function(req, res, callback){
    upload(req,res,function(err) {
    //  console.log(req);
      var item = req.body.category;
      var file_path = req.file.originalname;
      var filename_path = req.file.filename;

        config.query("INSERT INTO categories (`category_name`, `image`,`image_path`) VALUES (?,?,?)",[item,file_path,filename_path], function (err, result) {
          if (err) throw err;
        });

        if(err) {
              console.log(err);
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");

    });
  },
  AddToProducts:function(req, res, callback){
    upload(req,res,function(err) {
      var item = req.body.product;
      var cat = req.body.category;
      var file_path = req.file.originalname;
      var filename_path = req.file.filename;

      config.query("INSERT INTO products (product_name, categorie, image, image_path) VALUES (?,?,?,?)", [item, cat, file_path, filename_path], function (err, result) {

          if (err) throw err;
        });

        if(err) {
              console.log(err);
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");

    });
  },
  AddToGallery:function(req, res, callback){

    multiple_upload(req,res,function(err) {
      console.log(req);
      var id=req.body.id;
      var org_name=[];
      var file_name=[];

      for(var i=0; i<req.files.length; i++)
      {
        org_name[i] = req.files[i].originalname;
        file_name[i] = req.files[i].filename;

          config.query("INSERT INTO product_media (`id`,`href`, `src`,`type`,`title`,`description`) VALUES (?,?,?,?,?,?)", [id,org_name[i],file_name[i],'img','',''], function (err, result) {
            if (err) throw err;
          });

          if(err) {
                console.log(err);
              return res.end("Error uploading file.");
          }

      }

        console.log('File uploaded');
        res.end("File is uploaded");

    });

  },
  AddVideoToGallery:function(req, res, callback){

    var id = req.body.id;
    var link = req.body.link;
    var desc = req.body.desc;
    var data = {
    "Data":""
    };

  //  console.log(id);
    config.query("INSERT INTO product_media (`id`,`href`, `src`,`type`,`title`,`description`) VALUES ('"+id+"','"+link+"','"+link+"','youtube','"+desc+"','"+desc+"')", function (err, result) {

     if (err) throw err;
     res.json(data);
   });

  }
};


module.exports=Add_Items;
