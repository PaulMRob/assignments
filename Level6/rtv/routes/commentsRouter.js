const express = require("express");
const commentsRouter = express.Router();
const Comments = require("../models/Comments");
const Polipost = require("../models/Polipost");
const User = require("../models/User");

//get all comments for a post
commentsRouter.get("/:postId", async (req, res, next) => {
  try {
    const allPostComments = await Comments.find({ postID: req.params.postId });
    return res.status(200).send(allPostComments);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//get comments by user
commentsRouter.get("/user", async (req, res, next) => {
  try {
    console.log(req.body);
    const userComments = await Comments.find({ comment: req.auth._id });
    return res.status(200).send(userComments);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//add a comment
commentsRouter.post("/:postId", async (req, res, next) => {
  try {
    const comment = {
        comment: req.body.comment,
        username: req.auth.username,
        postID: req.params.postId
    }
    console.log("req.auth:", req.auth)
    console.log("add a comment:", comment)
    // req.body.author = req.auth._id;
    // req.body.username = req.auth.username;
    // req.body.postID = req.params.postId;
    const newComment = new Comments(comment);
    const savedComment = await newComment.save();
    return res.status(201).send(savedComment);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = commentsRouter;
