module.exports = (request,response,next) => {

    if(!request.query.email || !request.query.password){
        var data = {
            status : false,
            message : 'Required email or password !!',
            data : []
        }
        response.send(data);
    } else if(request.query.email == 'info@gmail.com' && request.query.password == '123456'){
        next();
    } else {
        var data = {
            status : false,
            message : 'Authetication Failed !!',
            data : []
        }
        response.send(data);
    }

    console.log(request.query);
    
}