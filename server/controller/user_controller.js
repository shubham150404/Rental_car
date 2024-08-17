const user = require('../model/user')
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shubhampipaliya25@gmail.com",
    pass: "htyldqxsurlzuevl",
  },
});
async function main(mail) {
  const info = await transporter.sendMail({
    from: 'shubhampipaliya25@gmail.com',
    to: mail,
    subject: "Unique Car",
    text: "Hello world?",
    html: "<p>Dear ${email},</p>",
  });

  console.log("Message sent: %s", info.messageId);
}

exports.user_create = async function (req, res, next) {
  console.log(req.body);
  try {
    if (!req.body.fname || !req.body.lname || !req.body.email || !req.body.password) {
      throw new Error("Please enter the fields")
    }
    if (req.body.password.length < 10) {
      throw new Error("Password must be at least 10 characters long");
    }
    const useremail = await user.findOne({ email: req.body.email })
    if (useremail) {
      throw new Error("email already exist")
    }
      req.body.password = await bcrypt.hash(req.body.password, 10)
      main(req.body.email)
      const user_create = await user.create(req.body)
      const user_token = jwt.sign({ id: user_create._id }, 'user')
    res.status(201).json({
      status: "success",
      message: "data create",
      data: user_create,
      user_token
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

const transporter_ = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shubhampipaliya25@gmail.com",
    pass: "htyldqxsurlzuevl",
  },
});
async function emain(Email) {
  const info = await transporter_.sendMail({
    from: 'shubhampipaliya25@gmail.com',
    to: Email,
    subject: "Unique Car",
    text: "Hello world?",
    html: "<b>well back to Unique Car thanks for the Login</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

exports.login = async function (req, res, next) {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("please enter the fields")
    }
    const user_email = await user.findOne({ email: req.body.email })
    if (!user_email) {
      throw new Error("please enter valid email")
    }
    const user_password = await bcrypt.compare(req.body.password, user_email.password)
    if (!user_password) {
      throw new Error("wrong password")
    }
    emain(req.body.email)
    const token_login = jwt.sign({ id: user_email._id }, 'user')
    res.status(201).json({
      status: "success",
      message: "user login",
      data: user_email,
      token_login
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.user_find = async function (req, res, next) {
  try {
    const user_find = await user.find()
    res.status(201).json({
      status: "success",
      message: "data show",
      data: user_find,
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.user_update = async function (req, res, next) {
  try {
    const user_update = await user.findByIdAndUpdate(req.query.id, req.body)
    res.status(201).json({
      status: "success",
      message: "data show",
      data: user_update,
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.user_delete = async function (req, res, next) {
  try {
    await user.findByIdAndDelete(req.query.id)
    res.status(201).json({
      status: "success",
      message: "data delete"
    })
  } catch (error) {
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.sequre = async function (req, res, next) {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      throw new Error("token not found")
    }
    let tokenn = jwt.verify(token, 'user')
    // console.log(tokenn);
    next()
  } catch (error) {
    console.log(error)
    res.status(404).json({
      status: "faild",
      message: error.message
    })
  }
}

exports.user_find_one = async function (req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      throw new Error("token not found")
    }
    let tokenn = jwt.verify(token, 'user')
    const currUser = await user.findById(tokenn.id)
    // console.log("currUser_find.one_data",currUser)
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

exports.find_user =async function(req, res, next) {
  let id = req.params.id
  // console.log(id);
  try {
    if (!req.params.id) {
      throw new Error("Data not found")
    }
    const find_user = await user.findById(id)
    console.log("find token user in admin page",find_user);
    res.status(201).json({
      status:"success",
      message:"data show",
      data : find_user,
    })
  } catch (error) {
    res.status(404).json({
      status:"faild",
      message:error.message
    })
  }
}