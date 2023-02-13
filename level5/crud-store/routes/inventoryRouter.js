const express = require("express");
const inventoryRouter = epxress.Router();
const Inventory = require("../models/inventory");

inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

inventoryRouter.get("/:inventoryId", (req, res, next) => {
  const inventoryId = req.params.inventoryId;
  const foundInventory = inventory.find(
    (inventory) => inventory._id === inventoryId
  );
  if (!foundInventory) {
    const error = new Error(`The Item with id ${inventoryId} was not found.`);
    return next(error);
  }
  res.status(200).send(foundInventory);
});

inventoryRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body);
  newInventory.save((err, savedInventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedInventory);
  });
});

inventoryRouter.delete("/:inventroyId", (req, res, next) => {
  Inventory.findOneAndDelete({ _id: req.params._id }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.status(200).send(`inventoy item ${deletedItem.name} was deleted.`);
  });
});

inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    { _id: req.params.inventoryId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedItem);
    }
  );
});

module.exports = inventoryRouter;
