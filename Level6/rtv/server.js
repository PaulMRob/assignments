const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to the DB");
});


app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
