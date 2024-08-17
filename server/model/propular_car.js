const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propular_car_schema = new Schema({
    name:String,
    price: String,
    Vehicle_Type: String,
    registration_year: String,
    Engine:String,
    image:String,
    Ownership:String,
    Torque:String,
    Pickup_power:String,
    Doors:String,
    Drive:String,
    Seating_Capacity:String,
    Fuel:String,
    Kms_done:String,
    Exterior_Color:String,
    Interior_Color:String,
});

const propular_car = mongoose.model('propular_car',propular_car_schema)

module.exports = propular_car;