const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Admin = require('../model/admin')


exports.Admin_create = async function (req, res, next) {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      throw new Error("please enter the fields")
    }
    const adminemail = await Admin.findOne({ email: req.body.email })
    if (adminemail) {
      throw new Error("email already exist")
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const admin_create = await Admin.create(req.body)
    const admin_token = jwt.sign({ id: admin_create._id }, 'ADMIN')
    res.status(201).json({
      status: "success",
      message: "data create",
      data: admin_create,
      admin_token
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.Admin_login = async function (req, res, next) {
  console.log(req.body);
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("please enter the fields")
    }
    const Admin_email = await Admin.findOne({ email: req.body.email })
    if (!Admin_email) {
      throw new Error("please enter valid email")
    }
    const Admin_password = await bcrypt.compare(req.body.password, Admin_email.password)
    if (!Admin_password) {
      throw new Error("wrong password")
    }
    const Admin_login_token = jwt.sign({ id: Admin_email._id }, 'ADMIN')
    console.log(Admin_login_token);
    res.status(201).json({
      status: "success",
      message: "user login",
      data: Admin_email,
      Admin_login_token
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.sequre_admin = async function (req, res, next) {
  try {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) {
      throw new Error("token not found")
    }
      let tokenn = jwt.verify(token, 'ADMIN')
      next() 
  } catch (error) {
    console.log(error)
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.admin_find_one = async function (req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      throw new Error("token not found")
    }
    let tokenn = jwt.verify(token, 'ADMIN')
    const currUser = await Admin.findById(tokenn.id)
    console.log(currUser);
    res.status(201).json({
      status: "success",
      message: "data show",
      data: currUser,
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}