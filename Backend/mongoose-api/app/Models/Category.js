const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'This field is required.'],
    },
    image : {
        type : String,
        required : [true, 'This field is required.'],
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

const categoryModal = mongoose.model('category',categorySchema);

module.exports = categoryModal;