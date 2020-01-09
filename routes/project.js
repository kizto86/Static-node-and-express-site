const express = require("express");
const router = express.Router();
const { projects } = require("../data/data.json");

router.get("/:id", (req, res, next) => {
  let { id } = req.params;
  const project = projects.find(project => project.id === id);

  if (project === undefined) {
    next();
  }

  return res.render("project", { project });
});

module.exports = router;
