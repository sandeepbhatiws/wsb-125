const express = require('express');
const { create, index, update, destroy } = require('../../Controllers/Admin/categoryController');

const router = express.Router();

module.exports = server => {

    router.post('/add',create);

    router.post('/view',index);

    router.put('/update',update);

    router.delete('/delete',destroy);

    server.use('/api/admin/categories',router);
}