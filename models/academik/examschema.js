const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
      required: true,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "programs",
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    totalMark: {
      type: Number,

      required: true,
      default: 100,
    },
    academicTerm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adacemicterms",
      required: true,
    },

    duration: {
      type: Number,
      required: true,
      default: 30, // in minutes, default is 60 minutes (1 hour)
    },

    examDate: {
      type: Date,
      required: true,
    },
    examTime: {
      type: String,
      required: true,
    },
    examType: {
      type: Date,
      required: true,
      default: "quiz",
    },
    examStatus: {
      type: String,
      required: true,
      default: "pending",
      enum: ["pending", "live"],
    },

    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
      },
    ],

    classLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classLevels",
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teachers",
      required: true,
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academicyears",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("exams", examSchema);
