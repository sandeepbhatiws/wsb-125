const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();  // Executable Function

// parse requests of content-type - application/json
server.use(express.json());

server.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.send('Server is working fine !!');
});

server.post('/category/add',async (request, response) => {

    const categorySchema = new mongoose.Schema({
        name : String,
        image : String,
        status : Boolean,
        order : Number,
    });

    const categoryModal = mongoose.model('category',categorySchema);
    

    const data = new categoryModal({
        name : request.body.category_name,
        image : request.body.category_image,
        status : request.body.category_status,
        order : request.body.category_order,
    })

    await data.find()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record inserted successfully !!',
            data : result,
        }
        response.send(resp);
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })


    

})



mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_new')
.then(() => {
    server.listen('5000');
    console.log('Connected!')
})
.catch(() => {
    console.log('Not Connected!');
});
