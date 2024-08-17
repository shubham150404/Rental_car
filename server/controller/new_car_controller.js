const new_car = require('../model/new_car')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const multer  = require('multer')



exports.new_car_create = async function (req, res, next) {
  console.log(req.file);
  try {
    if ( !req.body.name || !req.body.price || !req.body.Vehicle_Type || !req.body.registration_year || !req.body.Engine || !req.file || !req.body.Ownership || !req.body.style || !req.body.Pickup_power || !req.body.Doors || !req.body.Drive || !req.body.Seating_Capacity || !req.body.Fuel || !req.body.Kms_done  || !req.body.Exterior_Color || !req.body.Interior_Color) {
      throw new Error("***please fill the field***")
    }
    // if (isNaN(req.body.price ||req.body.registration_year || req.body.Engine || req.body.Ownership || req.body.Pickup_power || req.body.Doors || req.body.Drive || req.body.Kms_done || req.body.Seating_Capacity )) {
    //   throw new Error("Contain only number");
    // }
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
    
      req.body.photos = req.file.filename
        const new_car_create = await new_car.create(req.body)
        console.log(new_car_create);
        const new_car_token = jwt.sign({ id: new_car_create._id }, 'NewCar')
        res.status(201).json({
            status: "success",
            message: "data create",
            data: new_car_create,
            new_car_token
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}

exports.new_car_find =async function(req, res, next) {
    try {
      const new_car_find = await new_car.find()
      if(new_car_find == "")
      {
        throw new Error("Data is empty")
      } 
      res.status(201).json({
        status:"success",
        message:"data show",
        data : new_car_find,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
}

exports.new_car_findid =async function(req, res, next) {
    let id = req.params.id
    console.log(id);
    try {
      if (!req.params.id) {
        throw new Error("Data not found")
      }
      const new_car_find = await new_car.findById(id)
      console.log(new_car_find);
      res.status(201).json({
        status:"success",
        message:"data show",
        data : new_car_find,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
}

exports.new_car_update =async function(req, res, next) {
    try {
      const new_car_update = await new_car.findByIdAndUpdate(req.query.id,req.body)
      res.status(201).json({
        status:"success",
        message:"data update",
        data : new_car_update,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
}

exports.new_car_delete =  async function(req, res, next) {
    try {
       await new_car.findByIdAndDelete(req.query.id)
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


