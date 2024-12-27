// const { text } = require('body-parser');
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    actual_price: {
        type: Number,
        default:0,
        required: [true, "price is required"]
    },
    sale_price: {
        type: Number,
        default:0,
        required: [true, "price is required"]
    },
    best_selling: {
        type: String,
        enum:['Yes','No'],
        default:'No'
    },
    category_id: {
        type: String,
        required: [true, 'category is required']
    },
    sub_category_id: {
        type: String,
    },
    color_id: {
        type: String,
    },
    size_id: {
        type: String,
        required: [true, 'size is required']
    },
    image: {
        type: String,
        // required: [true, "thumbnail is required"]
    },
    description: {
        type: String,
        default:''
    },
    short_description:{
        type:String,
        default:''
    },
    shipping_charges:{
        type:Number,
        default:0
    },
    order: {
        type: Number,
        required: [true, 'order is required']
    },
    deleted_at: {
        type: Date,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })
let productModel = mongoose.model('Products', productSchema);
module.exports = productModel;