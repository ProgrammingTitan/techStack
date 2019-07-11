const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/// Create Schema
const UpdateSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type:String,
    }
});

module.exports = Update = mongoose.model('update', UpdateSchema);