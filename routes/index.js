//require express
const express = require("express");
//use the route constructor  to define a new router
//a route is kind of a mini app in express
const router = express.Router();
const { data } = require("../data/data.json");

//defining an index route to server the home page
router.get("/", (req, res) => {
  res.render("index");
});

//defining an about route to server the about page
router.get("/about", (req, res) => {
  res.render("about", {});
});

module.exports = router;
