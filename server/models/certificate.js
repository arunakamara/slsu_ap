const mongoose = require("mongoose");
const Joi = require("joi");

const certificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    positionHeld: {
      type: String,
      required: true,
      trim: true,
    },
    tenureOfService: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    universityName: {
      type: String,
      required: true,
      trim: true,
    },
    contributionNote: {
      type: String,
      required: true,
      trim: true,
    },
    issueYear: {
      type: Number,
      required: true,
      min: 1900,
      max: 2100,
    },
    issuedDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["valid", "invalid", "revoked"],
      default: "valid",
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

function validateCertificate(certificate) {
  const schema = Joi.object({
    certificateId: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    positionHeld: Joi.string().trim().required(),
    tenureOfService: Joi.string().trim().required(),
    course: Joi.string().trim().required(),
    universityName: Joi.string().trim().required(),
    contributionNote: Joi.string().trim().required(),
    issueYear: Joi.number().integer().min(1900).max(2100).required(),
    issuedDate: Joi.date().optional(),
    status: Joi.string().valid("valid", "invalid", "revoked").optional(),
  });

  return schema.validate(certificate);
}

exports.Certificate = Certificate;
exports.validateCertificate = validateCertificate;
