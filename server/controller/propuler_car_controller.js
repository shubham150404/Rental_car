const propular_car = require('../model/propular_car')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');




exports.propular_car_create = async function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
  try {
    if(!req.body.name || !req.body.price || !req.body.Vehicle_Type || !req.body.registration_year || !req.body.Engine || !req.file || !req.body.Ownership || !req.body.Torque || !req.body.Pickup_power || !req.body.Doors || !req.body.Drive || !req.body.Seating_Capacity || !req.body.Fuel || !req.body.Kms_done || !req.body.Exterior_Color || !req.body.Interior_Color){
      throw new Error("***please fill the field***")
    }
    if (req.body.price < 0) {
      throw new Error("***Price cannot be negative***");
    }
    if (req.body.registration_year < 0) {
      throw new Error("***registration year cannot be negative***");
    }
    if (req.body.Engine < 0) {
      throw new Error("***Engine cannot be negative***");
    }
    if (req.body.Ownership < 0) {
      throw new Error("***Ownership cannot be negative***");
    }
    if (req.body.Pickup_power < 0) {
      throw new Error("***Pickup power cannot be negative***");
    }
    if (req.body.Doors < 0) {
      throw new Error("***Doors cannot be negative***");
    }
    if (req.body.Drive < 0) {
      throw new Error("***car wheel power cannot be negative***");
    }
    if (req.body.Kms_done < 0) {
      throw new Error("***KMS cannot be negative***");
    }
    if (req.body.Seating_Capacity < 0) {
      throw new Error("***Seating Capacity cannot be negative***");
    }
    if (req.body.Torque < 0) {
      throw new Error("***Seating Capacity cannot be negative***");
    }
    req.body.image = req.file.filename
      const propular_car_create = await propular_car.create(req.body)
      console.log(propular_car_create);
      const propular_car_token = jwt.sign({ id:propular_car_create._id }, 'propular' )
      res.status(201).json({
        status:"success",
        message:"data create",
        data : propular_car_create,
        propular_car_token
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }
  exports.popular_car_findid =async function(req, res, next) {
    let id = req.params.id
    // console.log(id);
    try {
      if (!req.params.id) {
        throw new Error("Data not found")
      }
      const propular_car_find = await propular_car.findById(id)
      // console.log(propular_car_find);
      res.status(201).json({
        status:"success",
        message:"data show",
        data : propular_car_find,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

exports.propular_car_find = async function(req, res, next) {
    try {
      const propular_car_find = await propular_car.find()
      if (propular_car_find == "") {
        throw new Error("popular car is empty")
      }
      res.status(201).json({
        status:"success",
        message:"data show",
        data : propular_car_find,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

exports.propular_car_update = async function(req, res, next) {
    try {
      const propular_car_update = await propular_car.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data upadate",
        data : propular_car_update,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }

exports.propular_car_delete = async function(req, res, next) {
    try {
       await propular_car.findByIdAndDelete(req.query.id)
      res.status(201).json({
        status:"success",
        message:"data delete"
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }