const productModel = require("../../Modals/products.js")

exports.insert = async (request, response) => {

    var requestData = request.body;

    if (request.files.image) {
        requestData.image = request.files.image[0].filename
    }

    // if (request.files.images) {
    //     requestData.images = []
    //     request.files.images.forEach(element => {
    //         requestData.images.push(element.filename)
    //     });
    // }

    const data = new productModel(requestData)
    await data.save()
    .then((result) => {
        let res = {
            status: true,
            message: 'Record insert successfully',
            data: result
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
            message: 'Something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}

exports.index = async (request, response) => {

    var page = (request.body.page == undefined || request.body.page < 1) ? 1 : request.body.page;

    var limit = (request.body.limit == undefined) ? 5 : request.body.limit;

    var skip = (page - 1) * limit;

    var condition = {
        deleted_at:null,
    }

    if (request.body.category_id == undefined) {
    } else {
        condition.category_id = request.body.category_id
    }

    if (request.body.sub_category_id == undefined) {
    } else {
        condition.category_id = request.body.sub_category_id
    }

    if (request.body.size_id == undefined) {
    } else {
        condition.size_id = request.body.size_id
    }

    if (request.body.color_id == undefined) {
    } else {
        condition.color_id = request.body.color_id
    }

    if (request.body.name == undefined) {
    } else {
        condition.name = { $regex: request.body.name, $options: 'i' }
    }

    if (request.body.status == undefined) { 
    } else {
        condition.status = request.body.status
    }

    await productModel.find(condition)
        .select('name category_id sub_category_id color_id size_id actual_price sale_price status order')
        .limit(limit).skip(skip)
        .sort({ _id: 'desc' })
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'Record found succesfully',
                    data: result
                }
                response.send(resp)
            }
            else {
                const data = {
                    status: false,
                    message: 'No record  found ',
                    data: []
                }
                response.send(data)
            }
        })
        .catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                console.log(value);
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

exports.update = async (request, response) => {

    var requestData = request.body;

    if (request.files.image) {
        requestData.image = request.files.image[0].filename
    }

    await productModel.updateOne({ _id: request.params.id }, {
        $set: requestData
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Record update successfully',
                data: result
            }
            response.send(resp)
        })
        .catch((error) => {
            var errormessage = []

            for (var value in error.errors) {
                console.log(value);
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

exports.destroy = async (request, response) => {
    await productModel.updateMany({
        _id: {
            $in: request.body.id
        }
    }, {
        $set: { deleted_at: Date.now() }
    })
    .then((result) => {
        let resp = {
            status: true,
            message: 'Record delete successfully',
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
}

exports.details = async (request, response) => {

    await productModel.findOne({ _id: request.params.id })
        .then((result) => {
            let data = {
                status: true,
                message: ' Record found ssuccessfully',
                data: result
            }
            response.send(data)
        }).catch((error) => {
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

exports.changeStatus = async (request, response) => {
    await productModel.updateMany({
        _id: {
            $in: request.body.id
        }
    },
      [  
        {
            $set:
            {
                status: {
                    $switch: {
                        branches: [
                            { case: { $eq: ["$status", true] }, then: false },
                            { case: { $eq: ["$status", false] }, then: true },
                        ],
                    }
                }
            }
        }
    ])
    .then((result) => {
        let resp = {
            status: true,
            message: 'status update successfully',
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
}