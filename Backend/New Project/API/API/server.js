const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())

// require('dotenv').config();
// console.log(process.env.PORT);

app.use(cors())



app.get('/',(request,response)=>{
    response.send('server started successfully')
})
app.use('/uploads/categories', express.static('uploads/categories'))

require('./app/Routes/ADmin/ParentCategoryRoutes.js')(app)
require('./app/Routes/ADmin/SizeRoutes.js')(app)
require('./app/Routes/ADmin/colorRoute.js')(app)
require('./app/Routes/ADmin/subCategoryRoutes.js')(app)
// require('./app/Routes/ADmin/brandsRoute.js')(app)
require('./app/Routes/ADmin/productsRoute.js')(app)

require('./app/Routes/ADmin/loginRoute.js')(app)

// Website APIS
require('./app/Routes/website/userRoute.js')(app)
require('./app/Routes/website/orderPlaceRoute.js')(app)


mongoose.connect('mongodb://127.0.0.1:27017/FrankAndOaks')
  .then(() =>
    app.listen('5555',()=>{
   console.log('server working successfully')
    }),
   console.log('Connected!'))
   .catch((error)=>{
      console.log('something went wrong')
   })