const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userschema = new Schema({
    fname: String,
    lname: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

const user = mongoose.model('user', userschema)

module.exports = user;