const adminModel = require("../../models/Staff/admin");
const getJwtToken = require("../../utils/jwt");
const AsynHandler = require("express-async-handler");

// Register Admin Controller
const registerAdminCtrl = AsynHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const adminFound = await adminModel.findOne({ email });
  if (adminFound) {
    return res
      .status(400)
      .json({ message: "admin allaqachon ro'yhatdan o'tgan" });
  }

  const user = await adminModel.create({ name, email, password });

  res.status(201).json({ message: "admin registered successfully", user });
});
const loginAdminCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminFound = await adminModel.findOne({ email });
    if (!adminFound || !(await adminFound.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = getJwtToken(adminFound);
    res.json({ message: "admin logged in successfully", adminFound, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { registerAdminCtrl, loginAdminCtrl };
