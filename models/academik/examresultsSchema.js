const mongoose = require("mongoose");
const academikyear = require("./academikyear");

const examresultSchema = new mongoose.Schema(
  {
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["failed", "passed"],
      default: "failed",
    },
    remarks: {
      type: String,
      required: true,
      enum: ["Excellent", "Good", "Poor"],
      default: "Poor",
    },
    position: {
      type: Number,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
      required: true,
    },
    classLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classlevels",
      required: true,
    },
    academicTerm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adacemicterms",
      required: true,
    },
    academikyear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academikyears",
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    //   createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "admins",
    //     required: true,
    //   },
  },
  { timestamps: true }
);

module.exports = mongoose.model("examresults", examresultSchema);
