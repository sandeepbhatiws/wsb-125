const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    type: {
        type: String,
        enum : ['admin', 'user'],
        required: [true, 'type is required']
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
    }

}, { timestamps: true })
let userModal = mongoose.model('User', userSchema);
module.exports = userModal