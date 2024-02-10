var express = require('express');
var router = express.Router();
const userModel= require("./users");
const postModel= require("./posts");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/createuser", async function(req, res, next) {
  const createdUser = await userModel.create({
    username: "Aasa",
    password: "Hars",
    posts:[],
    email:"lodhaaax@gmail.com",
    fullName:"Aarav Lodha",
  });

  res.send(createdUser);
});

module.exports = router;
