const mongoose = require("mongoose");
const adminschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "siz name kiritishingiz shart"],
    },
    email: {
      type: String,
      required: [true, "siz email kiritishingiz shart"],
    },
    password: {
      type: String,
      required: [true, "siz parol kiritishingiz shart"],
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admins", adminschema);
