const jsonwebtoken = require("jsonwebtoken");

const getJwtToken = (userId) => {
  return jsonwebtoken.sign(
    {
      id: userId,
    },
    "secret",
    { expiresIn: "1d" }
  );
};
module.exports = getJwtToken;
