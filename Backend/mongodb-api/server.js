const express = require('express');
const server = express();   // Executable Function
const dbConnection = require('./dbConnection.js');
const mongodb = require('mongodb');

server.get('/', (request, response) => {
    response.send('Server is working Fine');
})

server.get('/api/admin/categories/add', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var data = {
        name : request.query.name,
        image : request.query.image
    }

    var data = await collection.insertOne(data);

    console.log(data);

    const result = {
        status : true,
        message : 'Category add Successfulyy !!',
        data : ''
    }

    response.send(result);

})

server.get('/api/admin/categories/view', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Category found Successfulyy !!',
            data : data
        }
        response.send(result);
    } else {
        const result = {
            status : false,
            message : 'no category found !!',
            data : []
        }
        response.send(result);
    }
})

server.get('/api/admin/categories/details', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var id = new mongodb.ObjectId(request.query.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Category found Successfulyy !!',
            data : data
        }
        response.send(result);
    } else {
        const result = {
            status : false,
            message : 'no category found !!',
            data : ''
        }
        response.send(result);
    }
})

server.listen('5000',() => {
    console.log('Server is working Fine');
});