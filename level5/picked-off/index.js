const { application } = require("express");
const express = require("express");
const app = express();

app.use("/", express.json());

app.use("/tacos", require("./routes/tacoRouter.js"));

app.get("/tacos", (req, res) => {
  res.send(req.body);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
