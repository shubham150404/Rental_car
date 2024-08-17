const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const new_car_schema = new Schema({
    name: String,
    price: Number,
    Vehicle_Type: String,
    registration_year: Number,
    Engine:Number,
    photos:String,
    Ownership:Number,
    style:String,
    Pickup_power:Number,
    Doors:Number,
    Drive:Number,
    Seating_Capacity:Number,
    Fuel:String,
    Kms_done:Number,
    Exterior_Color:String,
    Interior_Color:String,
});

const new_car = mongoose.model('new_car',new_car_schema)

module.exports = new_car;