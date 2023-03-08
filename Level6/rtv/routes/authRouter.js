const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//sign up
authRouter.post("/signup", async (req, res, next) => {
    await User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(403);
      return next(new Error("that username is already in use!"));
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser });
    });
  });
});

//log in

module.exports = authRouter;
