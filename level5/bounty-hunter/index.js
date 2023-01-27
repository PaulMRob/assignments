const express = require("express");
const app = express();

app.use("/", express.json());

app.use("/bounties", require("./routes/bountiesRouter"));

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
