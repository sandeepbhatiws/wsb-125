const categoryModal = require("../../Modals/category")

exports.insert = async (request, response) => {
    var formData = {

        name: request.body.name,
        order: request.body.order ? request.body.order : 0,
        root_id: request.body.parent_id,
        featured_categories: request.body.featured_categories,
    }
    // console.log(request.file)


    if (request.file.filename != undefined) {
        formData.image = request.file.filename
    }



    const data = new categoryModal(formData)
    await data.save()
        .then((result) => {
            let res = {
                status: true,
                base_url: `${request.protocol}://${request.get('host')}`,
                message: 'record insert successfully',
                data: result
            }
            response.send(res)
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
exports.index = async (request, response) => {
    if (request.body.page == undefined || request.body.page < 1) {
        var page = 1;
    } else {
        var page = request.body.page
    }
    if (request.body.limit == undefined) {
        var limit = 5;

    } else {
        var limit = request.body.limit;
    }
    var skip = (page - 1) * limit;
    var condition = {
        deleted_at: null,
        root_id: { $ne: 0 }
    }
    if (request.body.status != undefined) {
        condition.status = request.body.status;
    }
    if (request.body.root_id != undefined) {
        condition.root_id = request.body.root_id;
    }
    await categoryModal.find(condition)
        .select('name status image root_id featured_categories order')
        // .populate('root_id')
        .populate(
            {
                path:'root_id',
                select:'name'
            }
        )
        .limit(limit).skip(skip)
        .sort({ _id: 'desc' })
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    base_url: `${request.protocol}://${request.get('host')}/uploads/categories/`,
                    message: 'record  found succesfully',
                    data: result
                }
                response.send(resp)
            }
            else {
                const data = {
                    status: false,
                    message: 'no record  found ',
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
    var formData = {
        name: request.body.name,
        order: request.body.order,
        root_id: request.body.parent_id,
        featured_categories: request.body.featured_categories,
    }
    if (request.file.filename != undefined) {
        formData.image = request.file.filename
    }
    await categoryModal.updateOne({ _id: request.params.id }, {
        $set: formData
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'record update successfully',
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
exports.clear = async (request, response) => {
    await categoryModal.updateMany({
        _id: {
            $in: request.body.id
        }
    }, {
        $set: { deleted_at: Date.now() }
    })
        .then((result) => {
            let resp = {
                status: true,
                message: 'record update successfully',
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
exports.details = async (request, response) => {
    // console.log(request.params.id)
    await categoryModal.findOne({ _id: request.params.id })
        .then((result) => {
            let data = {
                status: true,
                base_url: `${request.protocol}://${request.get('host')}/uploads/categories/`,
                message: ' Record found ssuccessfully',
                data: result
            }
            response.send(data)
        }).catch((error) => {
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
exports.changeStatus = async (request, response) => {
    await categoryModal.updateMany(
        {
            _id: {
                $in: request.body.id
            },
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
                            ]
                        }

                    }

                }
            }
        ]
    )
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