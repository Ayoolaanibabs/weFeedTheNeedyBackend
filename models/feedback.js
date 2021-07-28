const mongoose = require('mongoose');
const Schema = mongoose.Schema

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const feedbackSchema = new Schema({
    email:{
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message:{
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
