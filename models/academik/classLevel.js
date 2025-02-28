const mongoose = require("mongoose");
const classLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "admins",
      required: true,
    },
    students: [
      {
        type: mongoose.Types.ObjectId,
        ref: "students",
      },
    ],
    subjects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "subjects",
      },
    ],
    teachers: [
      { 
        type: mongoose.Types.ObjectId,
        ref: "teachers",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("classlevels", classLevelSchema);
