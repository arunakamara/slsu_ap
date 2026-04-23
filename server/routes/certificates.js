const express = require("express");
const { Certificate, validateCertificate } = require("../models/certificate");
const router = express.Router();

// Get all certificates
router.get("/", async (req, res) => {
  const certificates = await Certificate.find().sort("certificateId");
  res.send(certificates);
});

// Verify a certificate by query string, e.g. /api/certificates/verify?id=SLSU-AP-2025-001
router.get("/verify", async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).send("Certificate id is required.");

  const certificate = await Certificate.findOne({
    certificateId: id.trim().toUpperCase(),
  });

  if (!certificate) return res.status(404).send("Certificate not found.");

  res.send(certificate);
});

// Get certificate by certificateId param
router.get("/:id", async (req, res) => {
  const certificate = await Certificate.findOne({
    certificateId: req.params.id.trim().toUpperCase(),
  });
  if (!certificate) return res.status(404).send("Certificate not found.");
  res.send(certificate);
});

// Create a new certificate record
router.post("/", async (req, res) => {
  const { error } = validateCertificate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let certificate = new Certificate({
    certificateId: req.body.certificateId.trim().toUpperCase(),
    name: req.body.name,
    positionHeld: req.body.positionHeld,
    tenureOfService: req.body.tenureOfService,
    course: req.body.course,
    universityName: req.body.universityName,
    contributionNote: req.body.contributionNote,
    issueYear: req.body.issueYear,
    issuedDate: req.body.issuedDate,
    status: req.body.status || "valid",
  });

  certificate = await certificate.save();
  res.send(certificate);
});

// Update a certificate by certificateId
router.put("/:id", async (req, res) => {
  const { error } = validateCertificate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const certificate = await Certificate.findOneAndUpdate(
    { certificateId: req.params.id.trim().toUpperCase() },
    {
      certificateId: req.body.certificateId.trim().toUpperCase(),
      name: req.body.name,
      positionHeld: req.body.positionHeld,
      tenureOfService: req.body.tenureOfService,
      course: req.body.course,
      universityName: req.body.universityName,
      contributionNote: req.body.contributionNote,
      issueYear: req.body.issueYear,
      issuedDate: req.body.issuedDate,
      status: req.body.status || "valid",
    },
    { new: true }
  );

  if (!certificate) return res.status(404).send("Certificate not found.");
  res.send(certificate);
});

module.exports = router;
