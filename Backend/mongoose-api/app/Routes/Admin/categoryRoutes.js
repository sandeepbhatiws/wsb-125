const express = require('express');
const { create, index, update, destroy, details } = require('../../Controllers/Admin/categoryController');

const router = express.Router();

module.exports = server => {

    router.post('/add',create);

    router.post('/view',index);

    router.post('/details/:id',details);

    router.put('/update/:id',update);

    router.delete('/delete/:id',destroy);

    server.use('/api/admin/categories',router);
}