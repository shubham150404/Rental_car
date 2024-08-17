const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyprodectschema = new Schema({
    pick:String,
    drop:String,
    // email:String,
    // number:String,
    date:String,
    item: Object,
    price: String,
    // user_data:{type: mongoose.Schema.ObjectId, ref: 'user'},
    user: Object,
    orderStatus: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancel'],
        default: 'pending'
    },
    paymentStatus: {
        type: String, 
        enum: ['pending', 'paid', 'refunded'],
        default: 'pending' },
    razorpay_order_id: {
        type: String,
    },
    razorpay_payment_id: {
        type: String,
    },
    razorpay_signature: {
        type: String,
    }
});

const order = mongoose.model('order', buyprodectschema)

module.exports = order