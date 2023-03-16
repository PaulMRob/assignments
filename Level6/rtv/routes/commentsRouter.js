const express = require("express");
const commentsRouter = express.Router();
const Comments = require("../models/Comments");
const Polipost = require("../models/Polipost");

//get all comments
commentsRouter.get("/", async (req, res, next) => {
  try {
    const allComments = await Comments.find({ comment: req.body.title });
    return res.status(200).send(allComments);
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
commentsRouter.post("/", async (req, res, next) => {
  try {
    const postId = await Polipost.find({})
    req.body.user = req.auth._id;
    console.log(req.body.user)
    const newComment = await Comments(req.body);
    const savedComment = await newComment.save();
    return res.status(201).send(savedComment);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = commentsRouter;
