const mongoose = require('mongoose');
const Schema = mongoose.Schema

const statisticsSchema = new Schema({
    location:{
        type: String,
        required: true
    },
    donationsRecieved:{
        type: Number,
        required: true
    },
    amountSpent: {
        type: Number,
        required: true,
    },
    cashRemaining: {
        type: Number,
        required: true
    },
    numberOfMealsServed: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true,
        enum: ['january','february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
        lowercase: true
    }
},
    {
        timestamps: true
    }
);

const Statistics = mongoose.model('Statistics', statisticsSchema);
module.exports = Statistics;
