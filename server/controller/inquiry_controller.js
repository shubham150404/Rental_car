const inquiry = require('../model/inquiry')
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');




exports.create_inquiry = async function (req, res, next) {
    console.log(req.body);
    try {
        if (!req.body.name || !req.body.email || !req.body.number) {
            throw new Error("***Please enter the fields***")
        }
        if (req.body.number.length < 10) {
            throw new Error("number must be at least 10 characters long");
          }
        if (isNaN(req.body.number)) {
            throw new Error("Contain only number");
        }
        const inquiry_create = await inquiry.create(req.body)
        const inquiry_token = jwt.sign({ id: inquiry_create._id }, 'inquiry')
        res.status(201).json({
            status: "success",
            message: "data create",
            data: inquiry_create,
            inquiry_token
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}

exports.find_inquiry = async function (req, res, next) {
    try {

        const inquiry_find = await inquiry.find()
        res.status(201).json({
            status: "success",
            message: "data show",
            data: inquiry_find,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}


exports.delete_inquiry = async function (req, res, next) {
    try {
        await inquiry.findByIdAndDelete(req.query.id)
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