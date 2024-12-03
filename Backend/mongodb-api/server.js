const express = require('express');
const server = express();   // Executable Function
const dbConnection = require('./dbConnection.js');
const mongodb = require('mongodb');

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

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

server.post('/api/admin/brands/add', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var data = {
        name : request.body.name,
        image : request.body.image
    }

    var data = await collection.insertOne(data);

    console.log(request.body);

    const result = {
        status : true,
        message : 'Brand add Successfulyy !!',
        data : ''
    }

    response.send(result);

})

server.post('/api/admin/brands/view', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Brands found Successfulyy !!',
            data : data
        }
        response.send(result);
    } else {
        const result = {
            status : false,
            message : 'no brands found !!',
            data : []
        }
        response.send(result);
    }
})

server.put('/api/admin/brands/update/:id', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var data = {
        name : request.body.name,
        image : request.body.image
    }

    try {
        var id = new mongodb.ObjectId(request.params.id);

        var data = await collection.updateOne({_id : id},{ $set: data });

        console.log(request.body);

        const result = {
            status : true,
            message : 'Brand update Successfulyy !!',
            data : ''
        }

        response.send(result);
    } catch (error) {
        const result = {
            status : false,
            message : 'Something went wrong !!',
            data : ''
        }

        response.send(result);
    }
    

})

server.delete('/api/admin/brands/delete', async(request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    try {
        var id = new mongodb.ObjectId(request.body.id);

        var data = await collection.deleteOne({_id : id});

        console.log(request.body);

        const result = {
            status : true,
            message : 'Brand delete Successfulyy !!',
            data : ''
        }

        response.send(result);
    } catch (error) {
        const result = {
            status : false,
            message : 'Something went wrong !!',
            data : ''
        }

        response.send(result);
    }
    

})

server.listen('5000',() => {
    console.log('Server is working Fine');
});