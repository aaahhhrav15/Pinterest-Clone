var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", function(req,res){
  const userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName,
  })
})

module.exports = router;
