const express = require("express");
const bountiesRouter = express.Router();
const Bounty = require("../models/bounty");

bountiesRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounties);
  });
});

bountiesRouter.get("/:bountyId", (req, res, next) => {
  const {bounty} = req.query
  const pattern = new RegExp(firstName)
  Bounty.find({firstName: {$regex: pattern, $options: 'i'}}, (err, bounties) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
});

bountiesRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, savedBounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBounty);
  });
});

bountiesRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({ _id: req.params._id }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted item ${deletedItem.fistName} from database!`);
  });
});

bountiesRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId }, //find this one to update
    req.body, //update the object with this data
    { new: true }, //send back updataed version please
    (err, updatedBounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedBounty);
    }
  );
});

module.exports = bountiesRouter;
