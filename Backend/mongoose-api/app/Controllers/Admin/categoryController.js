const categoryModal = require("../../Models/Category.js");

// For Add Data
exports.create = async(request,response) => {
    const data = new categoryModal({
        name : request.body.category_name,
        image : request.body.category_image,
        status : request.body.category_status,
        order : request.body.category_order,
    })

    await data.save()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record inserted successfully !!',
            data : result,
        }
        response.send(resp);
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For View 
exports.index = async(request,response) => {

    await categoryModal.find()
    .then((result) => {
        const resp = {
            status : true,
            message : 'Record found successfully !!',
            data : result,
        }
        response.send(resp);
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}

// For Update
exports.update = async(request,response) => {

}

// For Delete
exports.destroy = async(request,response) => {

}