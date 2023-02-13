const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    bountyAmount: {
        type: Number,
    },
    forceType: {
        type: String,
        required: false
    },
    living: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model("Bounty", bountySchema)