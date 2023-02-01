const express = require("express");
const tacoRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

tacoRouter.use("/", (req, res, next) => {
  req.body = [
    { name: "carnitas", meat: "pork", salsa: "verde", _id: uuidv4() },
    { name: "lengua", meat: "beef", salsa: "bone-marrow", _id: uuidv4() },
    { name: "barbacoa", meat: "goat", salsa: "roja", _id: uuidv4() },
    { name: "pastor", meat: "pork", salsa: "roja", _id: uuidv4() },
    { name: "carne-asada", meat: "beef", salsa: "verde", _id: uuidv4() },
  ];
  next();
});

module.exports = tacoRouter;
