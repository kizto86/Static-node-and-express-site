//require express
const express = require("express");

//use the route constructor  to define a new router
const router = express.Router();

const { projects } = require("../data/data.json");

//defining an index route to server the home page
router.get("/", (req, res) => {
  res.render("index", { projects });
});

module.exports = router;
