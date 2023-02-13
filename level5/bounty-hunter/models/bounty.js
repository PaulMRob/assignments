const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  bountyAmount: {
    type: Number,
    required: true
  },
  forceType: {
    type: String,
    required: false,
    enum: ["sith", "jedi"]
  },
  living: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model("Bounty", bountySchema);
