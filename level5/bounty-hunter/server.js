const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware (for every request) //
app.use("/", express.json());
app.use(morgan("dev"));

//Connect to DB //

mongoose.connect('mongodb://localhost:27017/bountiesdb', () => console.log("Connected to Database!"))

// Routes //
app.use("/bounties", require("./routes/bountiesRouter"));

// error handler //
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
