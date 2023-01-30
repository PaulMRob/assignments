const express = require("express");
const app = express();

app.use("/", express.json());

app.use("/things", require("./routes/thingsRouter"))

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
