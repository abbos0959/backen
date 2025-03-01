const mongoose = require("mongoose");

const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully  ishladi");
  } catch (error) {
    console.log("databasaga ulanmadi ", error.message);
  }
};

module.exports = DB;
