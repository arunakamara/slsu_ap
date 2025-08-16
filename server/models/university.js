const mongoose = require("mongoose");
const Joi = require("joi");

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  universityType: {
    type: String,
    required: true,
    enum: ["state", "private"],
  },
});

const University = mongoose.model("University", universitySchema);

function validateUniversity(university) {
    const universitySchema = Joi.object({
        name: Joi.string().min(5).max(100).required(),
        universityType: Joi.string().required().valid("state", "private")
    });
    return universitySchema.validate(university)
}

exports.University = University;
exports.validateUniversity = validateUniversity;
