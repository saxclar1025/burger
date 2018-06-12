const express = require("express");
const burgerModel = require("./../models/burger");

var router = express();

router.get("/", (req,res)=>{
  burgerModel.getAllBurgers(burgers=>{
    console.log("Queried all burgers", burgers);
    res.render("index", {burgers:burgers});
  });
});

router.post("/api/burgers", (req,res)=>{
  burgerModel.createBurger(req.body.name, result=>{
    console.log("Added burger:", result);
    res.json({id:result.insertId});
  });
});

router.post("/api/burgers/devour", (req,res)=>{
  burgerModel.devourBurger(req.body.id, result=>{
    console.log("Devoured burger:", result);
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;