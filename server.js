const app = require("./middleware/app");

app.listen(process.env.PORT, () => {
  console.log(`server ishladi ${process.env.PORT}`);
});
