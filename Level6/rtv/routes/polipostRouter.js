const express = require("express");
const polipost = require("./models/polipost");
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
polipostRouter.get("/user", async (req, res, next) => {
  try {
    const userPosts = await Polipost.find({ user: req.auth._id });
    console.log(userPosts)
    return res.status(200).send(userPosts)
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Add new Post
polipostRouter.post("/", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    const newPost = await Polipost(req.body)
    const savedPost = await newPost.save()
    return res.status(201).send(savedPost)
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Delete Post
polipostRouter.delete("/:postId", async (req, res, next) => {
  try {
    
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//Update Post
polipostRouter.put("/postId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = polipostRouter;
