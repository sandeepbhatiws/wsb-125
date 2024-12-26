let express = require('express');
const { insert, index } = require('../../Controller/ADmin/productsController.js');
let router = express.Router();
let multer = require('multer')
const upload = multer({dest:'uploads/products'})
module.exports=app=>{
    router.post('/add',upload.single('product_image'),insert)
    router.post('/view',index)
    app.use('/api/admin/products',router)
}