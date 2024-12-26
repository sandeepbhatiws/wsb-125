const mongoose = require('mongoose');
let brandSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        default: 1
    },
    order: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: [true, 'name required']
    },
    slug: {
        type: String,
        required: [true, 'slug required'],
        // match:/^[a-z]$/
    },
    deleted_at: Date

}, { timestamps: true })
let brandModel = mongoose.model('brand', brandSchema);
module.exports = brandModel

