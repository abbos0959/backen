const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fromYear: {
      type: Date,
      required: true,
    },
    toYear: {
      type: Date,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "admins",
      required: true,
    },
    teachers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "teachers",
      },
    ],
    students: [
      {
        type: mongoose.Types.ObjectId,
        ref: "students",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("academicyears", academicSchema);
