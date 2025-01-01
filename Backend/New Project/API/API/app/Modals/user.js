const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'name is required']
    },
    type: {
        type: String,
        enum : ['admin', 'user'],
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
let userModal = mongoose.model('User', userSchema);
module.exports = userModal