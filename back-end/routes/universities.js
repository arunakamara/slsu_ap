const express = require("express");
const { University, validateUniversity } = require("../models/university");
const router = express.Router();


// Get private universities
router.get("/private", async (req, res) => {
  const private_universities = await University.find({ universityType: "private"});
  res.send(private_universities);
})


// Get state universities
router.get("/state", async (req, res) => {
  const state_universities = await University.find({ universityType: "state"});
  res.send(state_universities);
})

// Adding a new University
router.post("/", async (req, res) => {
  const { error } = validateUniversity(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let university = new University({
    name: req.body.name,
    universityType: req.body.universityType,
  });

  university = await university.save();
  res.send(university);
});

module.exports = router;
