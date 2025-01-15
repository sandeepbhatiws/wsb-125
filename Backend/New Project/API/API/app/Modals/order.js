const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'user id is required']
    },
    product_details: {
        type: Array,
        required: [true, 'This is required']
    },
    rozorpay_order_id: {
        type: String,
    },
    rozorpay_transaction_id: {
        type: String,
    },
    shipping_address: {
        type: Object,
        required: [true, 'This is required']
    },
    delivery_address: {
        type: Object,
        required: [true, 'This is required']
    },
    payment_status: {
        type: Number,
        enum : [1, 2, 3],    // 1 - Pending 2 - Success  3 - Failed
        required: [true, 'This is required']
    },
    status: {
        type: Number,
        enum : [1, 2, 3, 4, 5],    // 1 - Order Placed 2 - Order Confirm  3 - Order Shipped 4 -  Order Delivered 5- Order Completed
        default: 1
    },
    deleted_at: {
        type: Date,
        default: ''
    }

}, { timestamps: true })
let orderModal = mongoose.model('Order_places', orderSchema);
module.exports = orderModal