const express = require('express');
const server =  express() // To Create executable
const apiData = require('./apiData/apiData.js');
const validation = require('./apiData/middleware.js');

const route = express.Router();
route.use(validation);

server.get('/',(request,response) => {
    response.send('Server is working fine !!');
})

server.get('/categories',validation,(request,response) => {

    if(apiData.categories.length > 0){
        var data = {
            status : true,
            message : 'Record fetch suuccessfully !!',
            data : apiData.categories
        }
    } else {
        var data = {
            status : false,
            message : 'No Record Found !!',
            data : []
        }
    }

    response.send(data);
})

route.get('/products',(request,response) => {

    if(apiData.products.length > 0){
        var data = {
            status : true,
            message : 'Record fetch suuccessfully !!',
            data : apiData.products
        }
    } else {
        var data = {
            status : false,
            message : 'No Record Found !!',
            data : []
        }
    }

    response.send(data);
})

server.use('/', route);

server.listen(5000,() => {
    console.log('Server is started');
});