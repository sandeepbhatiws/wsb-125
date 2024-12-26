const defaultModal = require("../../Modals/default.js")

exports.insert = async (request, response) => {
    const data = new defaultModal({
        name: request.body.cate_name,
    })
    await data.save()
        .then((result) => {
            let res = {
                status: true,
                message: 'record save successfully',
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
    await defaultModal.find({ deleted_at: null, status: true })
        .then((result) => {
            if (result.length > 0) {
                const resp = {
                    status: true,
                    message: 'record  found succesfully',
                    data: []
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
    await defaultModal.updateOne({ _id: request.params.id }, {
        $set: {
            name: request.body.cate_name,
            
        }
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
    await categoryModal.updateOne({ _id: request.params.id }, {
        $set: {
            deleted_at: Date.now()
        }
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