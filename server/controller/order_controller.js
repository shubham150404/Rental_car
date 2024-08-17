const order = require('../model/order')
const customer = require('../model/user');
const Razorpay = require('razorpay');
let jwt = require('jsonwebtoken');
const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');




exports.pay_order = async function (req, res) {
    try {
        // console.log("Run pay order")
        // console.log("DATA", req.body)
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature, car, user, book } = req.body;
        // console.log("CART", cart)
        const newPayment = order({
            item: car,
            price: amount,
            pick:book.pick,
            drop:book.drop,
            // email:book.email,
            // number:book.number,
            date:book.date,
            user,
            razorpay: {
                orderId: razorpayOrderId,
                paymentId: razorpayPaymentId,
                signature: razorpaySignature,
            },
        });
        await newPayment.save();
        return res.status(200).send({ message: "new payment Successfull" });
    } catch (er) {
        console.log(er);
        return res.status(500).send(er.message);
    }
}

exports.order_create = async function (req, res, next) {
    // console.log(req.body);
    try {
        console.log("ceate-orders");
        const instance = new Razorpay({
            key_id: 'rzp_test_9F83wt6GldPFA1',
            key_secret: 'EGTW2YsNDt3xQrOCW8AsBHm4',
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        // console.log("MyORder", order)
        if (!order) {
            // return res.status(500).send("some error occured");
            throw new Error("some error occured");
        }
        // console.log(order, "backend amount passage");
        return res.status(200).send({ message: "reached orders", order });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}

exports.get_razorpay_key = async function (req, res) {
    console.log("Run key find")
    try {
        return res.send({ key: "rzp_test_9F83wt6GldPFA1" });
    } catch (er) {
        return res.status(404).send(er.message);
    }
}

exports.order_find = async function (req, res, next) {
    try {
        const order_find = await order.find()
        res.status(201).json({
            status: "success",
            message: "data show",
            data: order_find,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}

exports.order_find_one = async function (req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token) {
            throw new Error("token not found")
        }
        let tokenn = jwt.verify(token, 'user')
        const currUser = await customer.findById(tokenn.id)
        console.log("profile_user_find_for_car", currUser._id)
        if (!currUser) {
            throw new Error("current user not found for booked car")
        } else {
            const odr = await order.find()
            // const order_find = await order.find(odr.user)
            // console.log(order_find);
            if (!odr) {
                throw new Error("user._id is not find")
            }
            // const order_find = await order.find(user._id)
            var compare_user = odr.filter((el) => el.user._id === currUser._id.toString())
            if (!compare_user) {
                throw new Error("order and user not equal for booked car")
            }
        }
        res.status(201).json({
            status: "success",
            message: "data show",
            data: compare_user,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}

exports.user_buy_car = async function (req, res, next) {
    try {
        let id = req.params.id
        const finduser = await customer.findById(id)
        // console.log("find_user", finduser)
        if (!finduser) {
            throw new Error("user not find")
        } else {
            const odr = await order.find()
            // console.log(odr);
            if (!odr) {
                throw new Error("user._id is not find")
            }
            var compare_user = odr.filter((el) => el.user._id === id)
            // console.log("user buy find",compare_user);
            if (!compare_user) {
                throw new Error("order and user not equal for booked car")
            }
        } 
        res.status(201).json({
            status: "success",
            message: "data show",
            data: compare_user,
        })
    } catch (error) {
        res.status(404).json({
            status: "faild",
            message: error.message
        })
    }
}


exports.order_delete = async function (req, res, next) {
    try {
        if (!req.query.id) {
            throw new Error("id not found")
        }
        await order.findByIdAndDelete(req.query.id)
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
