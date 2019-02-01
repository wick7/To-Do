var express = require("express");

var router = express.Router();

var connection = require("../config/connection.js");

var Handlebars = require("handlebars");

router.get("/", function(req, res) {
    
    connection.query("SELECT * FROM list;", function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        res.render("index",  {
            toDos: data
        });
    });
    
  });

router.get("/new-task", function(req, res) {
    
    res.render("newTask");
  
});


router.put("/update", function(req, res) {
    
    connection.query("UPDATE list SET completed= (?) WHERE id= (?);", [req.body.state, req.body.curName], function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
    });
});

router.post("/submit", function(req, res) {
    
    connection.query("INSERT INTO list (task, description) VALUES(?,?);", [req.body.name, req.body.desc], function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
    });
});

router.delete("/deleted/:id", function(req, res) {

    console.log(req.params.id)
    
    connection.query("DELETE FROM list WHERE id= ?", [req.params.id], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
    });
});

  module.exports = router;