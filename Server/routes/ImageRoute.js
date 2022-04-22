const express = require('express');
const router = express.Router();

const dbo = require('../db/Image');
const ObjectId = require("mongodb").ObjectId;

router.route("/pic").get(function (req, res) {
    let db_connect = dbo.getDb("Images");
    db_connect
      .collection("picture")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  router.route("/pic/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("picture")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  router.route("/pic/add").post( function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      img: req.body.img
    };
    db_connect.collection("picture").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

 router.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("picture").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  router.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();  
    let myquery = { _id: ObjectId( req.params.id )};  
    let newvalues = {    
      $set: {      
      img: req.body.img   
    }};
    db_connect.collection("picture").updateMany(myquery, newvalues, function(err, obj) {
      if (err) throw err;
      console.log("1 documents updated");
      response.json(obj);
  });
});

  module.exports = router;
