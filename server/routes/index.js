var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const inquiry = require('../model/inquiry')
const new_car = require('../model/new_car')
const propular_car = require('../model/propular_car')
const sell_car = require('../model/sell_car')
const Admin = require('../model/admin')
const user = require('../model/user')
const bcrypt = require('bcrypt');
var cors = require('cors')
const multer  = require('multer')
const inquiry_controller = require('../controller/inquiry_controller')
const user_controller = require('../controller/user_controller')
const propuler_controller = require('../controller/propuler_car_controller')
const new_car_controller = require('../controller/new_car_controller')
const sell_car_controller = require('../controller/sell_car_controller')
const admin_controller =require('../controller/admin_controller')
const order_controller = require('../controller/order_controller')
const { body, validationResult } = require('express-validator');

/* GET home page. */
// admin

router.post('/admin_create',admin_controller.Admin_create);

router.post('/admin_login',admin_controller.Admin_login);

router.get('/admin_find_one',admin_controller.admin_find_one); 
// inquiry

router.post('/inquiry_create',inquiry_controller.create_inquiry); //

router.get('/inquiry_find',admin_controller.sequre_admin,inquiry_controller.find_inquiry);
//admin delete karse
router.delete('/inquiry_delete',admin_controller.sequre_admin, inquiry_controller.delete_inquiry);

// user
// shubhu123@gmail.com
// shubhu123

router.post('/user_create',user_controller.user_create);

router.post('/login',user_controller.login);

router.get('/Ad_user_find',admin_controller.sequre_admin,user_controller.user_find);

router.get('/user_find',user_controller.sequre,user_controller.user_find);

router.get('/user_find_one',user_controller.sequre,user_controller.user_find_one); 

router.delete('/user_delete',admin_controller.sequre_admin,user_controller.user_delete);

router.put('/user_update',user_controller.sequre,user_controller.user_update);

router.get('/find_user/:id',user_controller.find_user); 


// propuler car

const storage_s = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload_s = multer({ storage: storage_s })

router.post('/propular_car_create',upload_s.single('image'),propuler_controller.propular_car_create);

router.get('/propular_car_find',propuler_controller.propular_car_find);

router.get('/popular_car_findid/:id',propuler_controller.popular_car_findid);

// http://localhost:3000/propular_car_delete?id=${id}
router.delete('/propular_car_delete',propuler_controller.propular_car_delete);

router.put('/propular_car_update',propuler_controller.propular_car_update);


//new car

const storagee = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploads = multer({ storage: storagee })

router.post('/new_car_create',uploads.single('photos'),new_car_controller.new_car_create);

router.get('/new_car_find',new_car_controller.new_car_find);

router.get('/new_car_findid/:id',new_car_controller.new_car_findid);

router.delete('/new_car_delete',new_car_controller.new_car_delete);

router.put('/new_car_update',new_car_controller.new_car_update);


// sell car
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })


router.post('/sell_car_create',upload.single('photo'),sell_car_controller.sell_car_create);

router.get('/sell_car_find',sell_car_controller.sell_car_find);

router.delete('/sell_car_delete',sell_car_controller.sell_car_delete);

// ORDER

router.post('/order_create',order_controller.order_create);

router.get('/order_key_find',order_controller.get_razorpay_key);

router.get('/all_order',order_controller.order_find);

router.get('/find_single_data',order_controller.order_find_one);

router.get('/user_buy_car/:id',order_controller.user_buy_car);

router.post('/pay_order',order_controller.pay_order);

router.delete('/order_delete',user_controller.sequre,order_controller.order_delete);



module.exports = router;
