const express = require('express');
const { login } = require('../../Controller/ADmin/loginController.js');
const router =express.Router();
const path = require('path')
const multer = require('multer')
const folder = multer({dest:'uploads/default'})

module.exports= app=>{
    router.post('/',folder.none(),login)

    app.use('/api/admin/login',router)
}