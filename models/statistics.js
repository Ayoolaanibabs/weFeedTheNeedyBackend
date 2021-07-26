const mongoose = require('mongoose');
const Schema = mongoose.Schema

const statisticsSchema = new Schema({
    location:{
        type: String,
        required: true
    },
    donationsRecieved:{
        type: String,
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
    }
},
    {
        timestamps: true
    }
);

const Statistics = mongoose.model('Suggest', statisticsSchema);
module.exports = Statistics;
