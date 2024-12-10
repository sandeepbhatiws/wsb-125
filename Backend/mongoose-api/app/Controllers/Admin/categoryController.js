const categoryModal = require("../../Models/Category.js");

// For Add Data
exports.create = async(request,response) => {

    console.log(request.file);

    const data = new categoryModal({
        name : request.body.category_name,
        // image : request.body.category_image,
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

    // await categoryModal.find({ deleted_at : null })
    // await categoryModal.find({ deleted_at : null, status : true })
    // await categoryModal.findOne({ _id : request.body.id, deleted_at : null, status : true })
    // await categoryModal.findById(request.body.id)



    // await categoryModal.find({ deleted_at : null, status : true }).select('name image')

    console.log(request.body.limit);

    if(request.body.page == undefined || request.body.page < 1){
        var page = 1;
    } else {
        var page = request.body.page;
    }

    if(request.body.limit == undefined){
        var limit = 6;
    } else {
        var limit = request.body.limit;
    }

    var skip = (page - 1) * limit;

    // await categoryModal.find({ deleted_at : null, status : true })
    // .select('name image')
    // .limit(limit).skip(skip)

    // var nameRegex = new RegExp("^" + request.body.name);

    var nameRegex = new RegExp(request.body.name,"i");

    await categoryModal.find(
        { 
            deleted_at : null, 
            status : true, 
            name : nameRegex,
            // order : { 
            //     $lt : 0
            // } 
        })
        .sort({ order: 'asc', _id : 'desc'})
    .select('name image status order')

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

// For Details
exports.details = async(request,response) => {

    // await categoryModal.findOne({ _id : request.params.id, deleted_at : null })
    
    await categoryModal.findById(request.params.id)
    .then((result) => {
        console.log(result);
        if(result != null){
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
                image : request.body.category_image,
                status : request.body.category_status,
                order : request.body.category_order,
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
            console.log(value);
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
            console.log(value);
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