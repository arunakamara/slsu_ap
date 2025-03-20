const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "SLSU_AP", message: "Welcome to SLSU_AP" });
  });

module.exports = router;