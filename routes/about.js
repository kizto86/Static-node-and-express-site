//require express
const express = require("express");

//use the route constructor  to define a new router
const router = express.Router();
const { projects } = require("../data/data.json");

//defining an about route to server the about page
router.get("/", (req, res) => {
  res.render("about", { projects });
});

module.exports = router;
