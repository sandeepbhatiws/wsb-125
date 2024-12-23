const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        match: /^[a-z A-Z]{2,20}$/,
        required : [true, 'Name is required.'],
    },
    category_id : {
        type : mongoose.ObjectId,
    },
    sub_category_id : {
        type : mongoose.ObjectId,
    },
    color_id : {
        type : mongoose.ObjectId,
    },
    size_id : {
        type : mongoose.ObjectId,
    },
    image : {
        type : String,
        default : ''
    },
    short_description : {
        type : Text,
        default : ''
    },
    description : {
        type : Text,
        default : ''
    },
    actual_price : {
        type : Double,
        default : 0
    },
    sale_price : {
        type : Double,
        default : 0
    },
    shipping_charges : {
        type : Double,
        default : 0
    },
    best_sellings : {
        type : String,
        enum : ['Yes','No'],
        default : `No`
    },
    status : {
        type : Boolean,
        default : 1
    },
    order : {
        type : Number,
        default : 0
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    },
});

const productModal = mongoose.model('Product',defaultSchema);

module.exports = productModal;