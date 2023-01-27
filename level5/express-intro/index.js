const express = require("express");
const app = express();

// Middleware (for every request)
app.use("/", express.json()); //looks for a request body and turns it into js and puts it in 'req.body' (which is the object the user sent in post request)

//Routes
app.use('/movies', (require("./movieRouter")))
app.use('/tvshows', (require("./routes/tvShowRouter.js")))

// server listening
app.listen(9000, () => {
  console.log("the server is running on port 9000");
});
