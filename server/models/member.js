const mongoose = require("mongoose");
const Joi = require("joi");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
    confirmPassword: {
      type: String,
    },
    universityType: {
      type: String,
      required: true,
      enum: ["state", "private"],
    },
    universityName: {
      type: String,
      required: true,
    },
    otherUniversity: {
      type: String,
      required: false,
    },
    levelOfEducation: {
      type: String,
      required: true,
      enum: ["Undergraduate", "Master's", "Ph.D."],
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

function validateMember(member) {
  const memberSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(255).required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
    universityType: Joi.string().required(),
    universityName: Joi.string().required(),
    otherUniversity: Joi.alternatives().conditional("universityName", {
      is: "others",
      then: Joi.string().required().messages({
        "any.required": "Please enter your university name",
      }),
      otherwise: Joi.string().optional(),
    }),
    levelOfEducation: Joi.string().required(),
    course: Joi.string().required(),
  });

  return memberSchema.validate(member);
}

exports.Member = Member;
exports.validateMember = validateMember;
