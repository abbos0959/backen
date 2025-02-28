const mongoose = require("mongoose");

const yeargroupschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    academicYear: {
      type: mongoose.Types.ObjectId,
      ref: "academicyears",
      required: true,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "admins",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("yeargroups", yeargroupschema);
