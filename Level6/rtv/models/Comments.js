const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  postID: {
    type: Schema.Types.ObjectId,
    ref: "Polipost",
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
