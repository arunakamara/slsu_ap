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
    holderName: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    program: {
      type: String,
      required: true,
      trim: true,
    },
    institution: {
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
    status: {
      type: String,
      enum: ["valid", "invalid", "revoked"],
      default: "valid",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

function validateCertificate(certificate) {
  const schema = Joi.object({
    certificateId: Joi.string().trim().required(),
    holderName: Joi.string().trim().required(),
    position: Joi.string().trim().required(),
    program: Joi.string().trim().required(),
    issueYear: Joi.number().integer().min(1900).max(2100).required(),
    institution: Joi.string().trim().required(),
    status: Joi.string().valid("valid", "invalid", "revoked").optional(),
    notes: Joi.string().trim().optional(),
  });

  return schema.validate(certificate);
}

exports.Certificate = Certificate;
exports.validateCertificate = validateCertificate;
