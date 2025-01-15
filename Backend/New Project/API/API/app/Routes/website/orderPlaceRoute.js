const express = require('express');

const {orderPlace, confirmOrder } = require('../../Controller/website/orderPlaceController.js');

const router =express.Router();
const path = require('path')
const multer = require('multer')
const validationMiddleware = require('../../validationMiddleware.js');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads/users')
    },
    filename:function(req,file,cb){
        const uniquevalue = Date.now()+ '-'+ Math.round(Math.random()*1E9)
        var imgpath= path.extname(file.originalname);
        cb(null,file.fieldname+'-'+ uniquevalue+imgpath)
    }
})

const none = multer({storage:storage}).none()

module.exports= app=>{

    router.post('/order-place',none,validationMiddleware,orderPlace);
    router.post('/confirm-order',none,validationMiddleware,confirmOrder);

    app.use('/api/website/order',router)
}