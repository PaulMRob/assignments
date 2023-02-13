const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use("/", express.json());
app.use(morgan("dev"));

mongoose.connect("mondodb://localhost:27017/crudstoredb", () =>
  console.log("Connected to the Crud Store Database!")
);

app.use("/inventory", require("./routes/inventoryRouter"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
