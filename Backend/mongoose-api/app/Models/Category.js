const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        // minLength : [5, 'Charater value must be greather that 5'],
        // maxlength : 15,
        // enum : ['men','women'],
        match: /^[a-z 'A-Z]{2,20}$/,
        required : [true, 'Name is required.'],
    },
    image : {
        type : String,
        required : [true, 'Image is required.'],
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