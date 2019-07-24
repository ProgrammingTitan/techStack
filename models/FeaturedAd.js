const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/// Create Schema
const AdSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageURL:{
        type: String,
    },
    description: {
        type:String,
    }
});

module.exports = Ad = mongoose.model('ad', AdSchema);