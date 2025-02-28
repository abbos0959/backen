const mongoose = require("mongoose");
const teachersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dataEmployed: {
      type: Date,
      default: Date.now,
    },

    teacherId: {
      type: String,
      required: true,
      default: function () {
        return (
          "TEA" +
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
    iswitdrawn: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "teacher",
    },
    subjects: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
    },
    applicationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "programs",
      required: true,
    },

    classLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classlevels",
      required: true,
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academicyears",
      required: true,
    },
    examCreated: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admins",
      required: true,
    },
    academicTerm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adacemicterms",
      required: true,
    },
  },
  {
    timestamps: true,
    // },
  }
);

module.exports = mongoose.model("teachers", teachersSchema);
