const mongoose = require('mongoose');
let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    root_id:{
        type:String,
        ref:'Category',
        default:0
    },
    image: {
        type: String,
    },
    featured_categories: {
        type:String,
        enum:['Yes','No'],
        default: 'No'
    },
    order: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    deleted_at: {
        type: Date,
        default: ''
    }

}, { timestamps: true })
// fro relation between two  collection ? first letter capital in collection name -------------------------->>>>
let categoryModal = mongoose.model('Category', categorySchema);
module.exports = categoryModal