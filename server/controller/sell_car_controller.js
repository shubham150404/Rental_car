const mongoose = require('mongoose');
const user = require('../model/user')
const bcrypt = require('bcrypt');
const sell_car = require('../model/sell_car')
var jwt = require('jsonwebtoken');
const multer  = require('multer')







exports.sell_car_create = async function(req, res, next) {
  console.log(req.body);
  try {
    if(!req.body.name || !req.body.email || !req.body.number || !req.body.brand || !req.body.model || !req.body.variant || !req.file || !req.body.discription ){
      throw new Error("***please fill the field***")
    }
      req.body.photo = req.file.filename
      if (req.body.number.length < 10) {
        throw new Error("number must be at least 10 characters long");
      }
    if (isNaN(req.body.number) ) {
        throw new Error("Contain only number");
    }
      const sell_car_create = await sell_car.create(req.body)
      console.log(sell_car_create);
      const sell_car_token = jwt.sign({ id: sell_car_create._id }, 'sellcar' )
      res.status(201).json({
        status:"success",
        message:"data create",
        data : sell_car_create,
        sell_car_token
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }



exports.sell_car_find = async function(req, res, next) {
    try {
      const sell_car_find = await sell_car.find()
      res.status(201).json({
        status:"success",
        message:"data show",
        data : sell_car_find,
      })
    } catch (error) {
      res.status(404).json({
        status:"faild",
        message:error.message
      })
    }
  }



exports.sell_car_delete = async function(req, res, next) {
    try {
       await sell_car.findByIdAndDelete(req.query.id)
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
