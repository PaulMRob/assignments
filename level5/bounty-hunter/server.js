const express = require("express");
const app = express();
const morgan = require('morgan')

app.use("/", express.json());
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter"));
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
