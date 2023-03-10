const express = require("express");
const polipostRouter = express.Router();
const Polipost = require("./models/polipost");

//Get All Posts
polipostRouter.get("/", async (req, res, next) => {
  try {
    const allPosts = await Polipost.find({ post: req.body.title });
    console.log(allPosts);
    return res.status(200).send(allPosts);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Get posts by user

//Add new Post

//Delete Post

//Update Post

module.exports = polipostRouter;
