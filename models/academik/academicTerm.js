const mongoose = require("mongoose");
const academicTermSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
      default: "3 months",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "admins",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("adacemicterms", academicTermSchema);
