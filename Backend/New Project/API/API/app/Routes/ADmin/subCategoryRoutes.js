const express = require('express');
const {insert, index, update, clear, details,changeStatus } = require('../../Controller/ADmin/subCategoryController.js');
const router =express.Router();
const path = require('path')
const multer = require('multer')
const folder = multer({dest:'uploads/categories'})
const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads/categories')
    },
    filename:function(req,file,cb){
        const uniquevalue = Date.now()+ '-'+ Math.round(Math.random()*1E9)
        var imgpath= path.extname(file.originalname);
        cb(null,file.fieldname+'-'+ uniquevalue+imgpath)
    }
})
const single = multer({storage:storage}).single('image')
const multiple = multer({storage:storage}).array('images')
const none = multer({storage:storage}).none()
module.exports= app=>{
    router.post('/add',single,insert)
    router.post('/',folder.none(),index)
    router.put('/update/:id',single,update)
    router.post('/delete',folder.none(),clear)
    router.post('/change-status',folder.none(),changeStatus)
    router.post('/detail/:id',folder.none(),details)
    app.use('/api/admin/sub-categories',router)
}