const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");

app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection to database!");
  })
  .catch((dbErr) => {
    console.log("Connection to database failed:", dbErr.message);
  });

app.use("/auth", require("./routes/authRouter"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/polipost", require("./routes/polipostRouter"));
app.use("/api/comments", require("./routes/commentsRouter"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});
