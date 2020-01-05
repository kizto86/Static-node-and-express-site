//require express
const express = require("express");

//use the route constructor  to define a new router
const router = express.Router();

router.get("/:id", (req, res, next) => {
  let { id } = req.params;
});

module.exports = router;
