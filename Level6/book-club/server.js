const express = require("express");
const app = epxress();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-");

app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((dbErr) => {
    console.log("Connection to database failed:", dbErr.message);
  });

  //Routes

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});
