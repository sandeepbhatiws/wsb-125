const express = require('express');
const {insert, index, update, clear } = require('../../Controller/ADmin/defaultController.js');
const router =express.Router();
const path = require('path')
const multer = require('multer')
const folder = multer({dest:'uploads/default'})
const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads/default')
    },
    filename:function(req,file,cb){
        const uniquevalue = Date.now()+ '-'+ Math.round(Math.random()*1E9)
        // console.log(file);
        var imgpath= path.extname(file.originalname);
        cb(null,file.fieldname+'-'+ uniquevalue+imgpath)
    }
})
const single = multer({storage:storage}).single('default_image')
const multiple = multer({storage:storage}).array('default_images')
const none = multer({storage:storage}).none()
module.exports= app=>{
    router.post('/add',none,insert)
    router.post('/view',none,index)
    router.put('/update/:id',none,update)
    router.delete('/delete/:id,none',clear)
    app.use('/api/admin/default',router)
}