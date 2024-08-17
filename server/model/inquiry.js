const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquiryschema = new Schema({
    name: String,
    email: String,
    number: Number
});

const inquiry = mongoose.model('inquiry',inquiryschema)

module.exports = inquiry;