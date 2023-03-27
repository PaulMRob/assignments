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
app.use("/auth", require("./routes/authRouter"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/bookpost", require("./routes/bookpostRouter"))


app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});
