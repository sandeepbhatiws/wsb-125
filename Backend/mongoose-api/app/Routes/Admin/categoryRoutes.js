const express = require('express');
const { create, index, update, destroy, details } = require('../../Controllers/Admin/categoryController');

const router = express.Router();
const path = require('path');
const multer  = require('multer')
const folder = multer({ dest: 'uploads/categories' })


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/categories')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log(file);
        var imagepath = path.extname(file.originalname);
        console.log(imagepath);

      cb(null, file.fieldname + '-' + uniqueSuffix+imagepath)
    }
})
  
const upload = multer({ storage: storage }).single('category_image');

module.exports = server => {

    // router.post('/add',upload.single('category_image'),create);

    router.post('/add',upload,create);

    router.post('/view',index);

    router.post('/details/:id',details);

    router.put('/update/:id',update);

    router.delete('/delete/:id',destroy);

    server.use('/api/admin/categories',router);
}