const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const polipostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  upvotes: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Polipost", polipostSchema);
