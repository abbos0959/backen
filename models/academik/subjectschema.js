const mongoose = require("mongoose");
const subjectModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    teacher: {
      type: mongoose.Types.ObjectId,
      ref: "teachers",
    },
    academicTerm: {
      type: mongoose.Types.ObjectId,
      ref: "adacemicterms",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "admins",
      required: true,
    },
    duration: {
      type: String,
      required: true,
      default: "3 months",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subjects", subjectModel);
