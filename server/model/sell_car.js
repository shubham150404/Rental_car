const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const sell_car_schema = new Schema({
        name: String,
        email: String,
        number: Number,
        brand:String,
        model:String,
        variant:String,
        photo:String,
        discription:String,

    });

const sell_car = mongoose.model('sell_car',sell_car_schema)

module.exports = sell_car;