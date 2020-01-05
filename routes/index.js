//require express
const express = require("express");

//use the route constructor  to define a new router
const router = express.Router();

const { data } = require("../data/data.json");

//defining an index route to server the home page
router.get("/", (req, res) => {
  res.render("index", { data });
});

module.exports = router;
