const express = require('express');
const server =  express() // To Create executable
const apiData = require('./apiData/apiData.js');

server.get('/',(request,response) => {
    response.send('Server is working fine !!');
})

server.post('/categories',(request,response) => {
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

server.listen(5000,() => {
    console.log('Server is started');
});