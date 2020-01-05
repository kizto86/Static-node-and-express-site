//require express
const express = require("express");

//use the route constructor  to define a new router
const router = express.Router();

//defining an about route to server the about page
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
