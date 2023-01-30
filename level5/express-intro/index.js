const express = require("express");
const app = express();

// Middleware (for every request)
app.use("/", express.json()); //looks for a request body and turns it into js and puts it in 'req.body' (which is the object the user sent in post request)

//Routes
app.use("/movies", require("./routes/movieRouter"));
app.use("/tvshows", require("./routes/tvShowRouter.js"));
app.use("/items", (req, res, next) => {
  console.log("the items middleware was executed");
  next();
});

app.use("/items", (req, res, next) => {
  req.body =  {name: "rick"}
  next() 
})

app.get("/items", (req, res, next) => {
  console.log("get request recieved")
  res.send(req.body)
})


// server listening
app.listen(9000, () => {
  console.log("the server is running on port 9000");
});
