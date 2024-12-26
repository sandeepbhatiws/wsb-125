const express = require('express');
const { insert, index, clear, update } = require('../../Controller/ADmin/brandsController.js');
let router = express.Router();

module.exports= app =>{
    router.post('/add',insert)
    router.post('/view',index)
    router.put('/update/:id',update)
    router.delete('/delete/:id',clear)
    app.use('/api/admin/brands',router)

}