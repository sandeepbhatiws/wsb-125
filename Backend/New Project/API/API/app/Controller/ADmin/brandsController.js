const brandModel = require("../../Modals/brands")
const categoryModal = require("../../Modals/category")

exports.insert= async(request,response)=>{
    let data = new brandModel({
        name : request.body.name,
        status:request.body.status,
        slug: request.body.slug,
        order:request.body.order
    })
    await data.save()
    .then((result)=>{
        let resp ={
            status:true,
            message:'record insert successfully',
            data:result
        }
        response.send(resp)
    })
    .catch((error)=>{
      var  errormessage = []
        for(var value in error.errors){
            errormessage.push(error.errors[value].message)
        }
        let resp ={
            status:false,
            message:'something wrong in insert record',
            data:errormessage
        }
        response.send(resp)
    })
}
exports.index=async(request,response)=>{
await brandModel.find({deleted_at:null,status:true})
.then((result)=>{
   if(result.length>0){
    let resp ={
        status:true,
        message:'records found successfully',
        data:result
    }
    response.send(resp)
   }
   else{
    let resp ={
        status:true,
        message:'no records found ',
        data:''
    }
    response.send(resp)
   }
   
}).catch((error)=>{
    var  errormessage = []
      for(var value in error.errors){
          errormessage.push(error.errors[value].message)
      }
      let resp ={
          status:false,
          message:'something wrong in insert record',
          data:errormessage
      }
      response.send(resp)
  })



}
exports.update=async(request,response)=>{
    console.log(request.params.id)
    await brandModel.updateOne({_id: request.params.id},{$set:{
        name : request.body.name,
        status:request.body.status,
        slug: request.body.slug,
        order:request.body.order
    }})
    .then((result)=>{

        let resp ={
            status:true,
            message:'records updated successfully',
            data:result
        }
        response.send(resp)
    }).catch((error)=>{
        var  errormessage = []
          for(var value in error.errors){
              errormessage.push(error.errors[value].message)
          }
          let resp ={
              status:false,
              message:'something wrong in insert record',
              data:errormessage
          }
          response.send(resp)
      })
    

}
exports.clear=async(request,response)=>{
    await brandModel.updateOne({_id:request.params.id},{deleted_at:Date.now()})
    .then((result)=>{

        let resp ={
            status:true,
            message:'records deleted successfully',
            data:result
        }
        response.send(resp)
    }).catch((error)=>{
        var  errormessage = []
          for(var value in error.errors){
              errormessage.push(error.errors[value].message)
          }
          let resp ={
              status:false,
              message:'something wrong in delete record',
              data:errormessage
          }
          response.send(resp)
      })
}