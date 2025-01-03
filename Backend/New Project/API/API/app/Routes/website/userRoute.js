const express = require('express');

const {login, register, updateProfile, changePassword, viewProfile, forgotPassword, resetPassword } = require('../../Controller/website/userController.js');

const router =express.Router();
const path = require('path')
const multer = require('multer')
const folder = multer({dest:'uploads/users'})

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

const single = multer({storage:storage}).single('image')
const multiple = multer({storage:storage}).array('images')
const none = multer({storage:storage}).none()

module.exports= app=>{

    router.post('/login',none,login);
    router.post('/register',none,register);
    router.post('/view-profile',none,viewProfile);
    router.post('/update-profile',single,updateProfile);
    router.post('/change-password',none,changePassword);
    router.post('/forgot-password',none,forgotPassword);
    // router.post('/reset-password',none,resetPassword);

    app.use('/api/website/user',router)
}