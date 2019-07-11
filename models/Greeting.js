const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/// Create Schema
const GreetingSchema = new Schema({
    headline: {
        type: String,
        required: true
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

module.exports = Greeting = mongoose.model('greeting', GreetingSchema);