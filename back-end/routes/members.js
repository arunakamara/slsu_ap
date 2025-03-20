const express = require("express");
const _ = require("lodash");
const { Member, validateMember } = require("../models/member");
const router = express.Router();

//Get all members
router.get("/", async (req, res) => {
  const member = await Member.find().sort("name");
  res.send(member);
});

//Get member by id
router.get("/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  if (!member)
    return res
      .status(404)
      .send("The person with this id is not a registered member.");

  res.send(member);
});

//Creating a new Member
router.post("/", async (req, res) => {
  const { error } = validateMember(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Will also be handled by the frontend, already handled by mongoose schema for the backend
  const existingMember = await Member.findOne({ email: req.body.email });
  if (existingMember) {
    return res.status(400).send("Email is already registered");
  }

  let member = new Member({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    universityType: req.body.universityType,
    universityName: req.body.universityName,
    otherUniversity: req.body.otherUniversity,
    levelOfEducation: req.body.levelOfEducation,
    course: req.body.course,
  });

  try {
    member = await member.save();
  } catch (ex) {
    console.log(ex);
    for (field in ex.errors) console.log(ex.errors[field].message);
    return res.status(400).send(ex.errors[field].message);
  }

  res.send(_.pick(member, ["name", "email"]));
});

router.put("/:id", async (req, res) => {
  const { error } = validateMember(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const member = await Member.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, phone: req.body.phone },
    { new: true }
  );
  if (!member)
    return res
      .status(404)
      .send("The person with this id is not a registered member.");

  member.name = req.body.name;
  res.send(member);
});

router.delete("/:id", async (req, res) => {
  const member = await Member.findByIdAndDelete({ _id: req.params.id });
  if (!member)
    return res
      .status(404)
      .send("The person with this id is not a registered member.");

  res.send(member);
});

module.exports = router;
