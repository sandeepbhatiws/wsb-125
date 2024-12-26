const { response } = require("express")
const productModel = require("../../Modals/products.js")

exports.insert=async(request,response)=>{
    console.log(request.file)
    let data = new productModel({
        name:request.body.name,
        slug:request.body.slug,
        status:request.body.status,
        price:request.body.price,
        brand:request.body.brand,
        category:request.body.category,
        thumbnail:request.body.image,
        order:request.body.order,
        description:request.body.description

    })
    await data.save()
    .then((result)=>{
        let resp={
            status:true,
            message:'Record save successfully',
            data:result
        }
            response.send(resp)
     }).catch((error)=>{
        let resp={
            status:true,
            message:'something went wrong',
            data:error
        }
            response.send(resp)
     })
}
exports.index=async (request,response)=>{
    await productModel.find({status:true,deleted_at:null})
    .then((result)=>{
        if(result.length>0){
                let data = {
                    status:true,
                    message:'records  found successsfully',
                    data:result
                }
                response.send(data)
        }else{
            let data = {
                status:false,
                message:'no records  found ',
                data:[]
            }
            response.send(data)
        }
            
    }).catch((error)=>{
        // let errormessage=[];
        // for (var value in error.errors){
        //     errormessage= error.errors[value].value
        // }
        let data = {
            status:false,
            message:'something went wrong',
            data:error,

        }
        response.send(data)

    })
}