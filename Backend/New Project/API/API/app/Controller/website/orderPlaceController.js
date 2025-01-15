const orderModal = require("../../Modals/order.js")

const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

exports.orderPlace = async (request, response) => {

    const data = new orderModal(request.body)
    await data.save()
    .then((result) => {

        let res = {
            status: true,
            message: 'Order Placed Successfully !!',
            data: ''
        }
        response.send(res)
    })
    .catch((error) => {
        var errormessage = [] 
        for (var value in error.errors) {
            errormessage.push(error.errors[value].message)
        }
        let res = {
            status: false,
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}

exports.confirmOrder = async (request, response) => {

    try {
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secretvalue);

        var data = request.body;

        if(request.file){
            data.image = request.file.filename;
        }

        await userModal.updateOne({ _id: decoded.user._id }, {
            $set: data
        })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Profile update successfully',
                data: result
            }
            response.send(resp)
        })
        .catch((error) => {
            var errormessage = []
            for (var value in error.errors) {
                errormessage.push(error.errors[value].message)
            }
            let res = {
                status: false,
                message: 'something went wrong',
                data: errormessage
            }
            response.send(res)
        })
    } catch (error) {
        const data = {
            status: false,
            message: 'Token is invalid',
            tokenStatus : false,
            data: error
        }
        response.send(data)
    }
}
