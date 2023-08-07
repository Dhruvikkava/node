const mongoose = require("mongoose");
const moment = require('moment');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    created_at: {
        type : Date,
        default: moment().format("MM ddd, YYYY HH:mm")
    }, // Use `created_at` to store the created date
    updated_at: {
        type : Date,
        default: moment().format("MM ddd, YYYY HH:mm")
    }, // and `updated_at` to store the last updated date    
},{
    timestamps: false
}
)
module.exports =  mongoose.model("User", userSchema);