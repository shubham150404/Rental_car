const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminschema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
      },
    password:String
});

const Admin = mongoose.model('admin',adminschema)

module.exports = Admin;