const orderModal = require("../../Modals/order.js")

var jwt = require('jsonwebtoken');

const saltRounds = 10;
var secretvalue = '1234567890';

const Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: 'rzp_test_bQlyV7ucVx6ogo',
    key_secret: 'yvogXUWbQBb9Fc35v9SV4loV',
});

exports.orderPlace = async (request, response) => {

    const token = request.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, secretvalue);

    var requestData = request.body;
    requestData.user_id = decoded.user._id;

    const data = new orderModal(requestData)
    await data.save()
    .then( async (result) => {

        var orderPayment = await instance.orders.create({
            "amount": request.body.net_amount * 100,
            "currency": "INR",
            "receipt": result._id,
            "partial_payment": false,
        });

        await orderModal.updateOne({ _id: result._id }, {
            $set: {
                rozorpay_order_id : orderPayment.id
            }
        })

        let res = {
            status: true,
            message: 'Order Placed Successfully !!',
            orderPayment : orderPayment,
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

        await orderModal.updateOne({ rozorpay_order_id: request.body.rozorpay_order_id }, {
            $set: data
        })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Order Status update successfully',
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
