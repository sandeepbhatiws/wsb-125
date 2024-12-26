const mongoose = require('mongoose');
let defaultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    },
    deleted_at: {
        type: Date,
        default: ''
    },status:{
        type:Boolean
    }

}, { timestamps: true })
let defaultModal = mongoose.model('category', defaultSchema);
module.exports = defaultModal