const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

adminschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

adminschema.methods.matchPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
module.exports = mongoose.model("admins", adminschema);
