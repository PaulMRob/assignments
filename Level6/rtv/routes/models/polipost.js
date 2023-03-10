const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const polipostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Polipost", polipostSchema);
