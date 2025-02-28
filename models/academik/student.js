const mongoose = require("mongoose");

const studentschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    studentId: {
      type: String,
      required: true,
      default: function () {
        return (
          "STU" +
          Math.floor(100 + Math.random() * 900) +
          Date.now().toString().slice(2, 4) +
          this.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        );
      },
    },

    role: {
      type: String,
      default: "student",
    },
    classLevel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classlevels",
        required: true,
      },
    ],
    currentClassLevel: {
      type: String,
      default: function () {
        return this.classLevel[this.classLevel.length - 1];
      },
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academicyears",
      required: true,
    },

    dateAditted: {
      type: Date,
      default: Date.now,
    },
    examResult: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "examresults",
    },

    program: {
      type: mongoose.Types.ObjectId,
      ref: "programs",
      required: true,
    },

    isPromotedToLevel200: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel300: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel400: {
      type: Boolean,
      default: false,
    },

    isGraduated: {
      type: Boolean,
      default: false,
    },

    isWithDrawn: {
      type: Boolean,
      default: false,
    },

    isSuspended: {
      type: Boolean,
      default: false,
    },
    prefectName: {
      type: String,
    },
    finalcialReport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "finalcialreports",
      required: true,
    },
    yearGraduated: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("students", studentschema);
