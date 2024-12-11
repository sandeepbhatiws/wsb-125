const defaultModal = require("../../Models/Default.js");

// For Add Data
exports.create = async(request,response) => {

    const data = new defaultModal({
        name : request.body.category_name,
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
        var errormessages = [];
        for(var value in error.errors){
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For View 
exports.index = async(request,response) => {

    await defaultModal.find({ deleted_at : null })
    .select('name status order')
    .then((result) => {
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
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

    await categoryModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : {
                name : request.body.category_name,
            }
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record update successfully !!',
            data : result
        }
        response.send(resp);
    }).catch((error) => {
        var errormessages = [];
        for(var value in error.errors){
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}

// For Delete
exports.destroy = async(request,response) => {
    await categoryModal.updateOne(
        {
            _id : request.params.id
        },
        {
            $set : {
                deleted_at : Date.now(),
            }
        }
    ).then((result) =>{
        var resp = {
            status : true,
            message : 'Record deleted successfully !!',
            data : result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];
        for(var value in error.errors){
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : errormessages
        }
        response.send(resp);
    })
}