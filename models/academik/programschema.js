const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
      required: true,
      default: "4 years",
    },
    code: {
      type: String,
      default: function () {
        return (
          this.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase() +
          Math.floor(10 + Math.random() * 90) +
          Math.floor(10 + Math.random() * 90)
        );
      },
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
        default: [],
      },
    ],
    subjects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "subjects",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("programs", programSchema);
