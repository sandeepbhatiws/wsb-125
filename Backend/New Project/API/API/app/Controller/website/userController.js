const userModal = require("../../Modals/user.js")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;
var secretvalue = '1234567890';

exports.register = async (request, response) => {

    const password = bcrypt.hashSync(request.body.password, saltRounds);

    const data = new userModal({
        name: request.body.name,
        email: request.body.email,
        password : password,
        type : 'user',
    })
    await data.save()
    .then((result) => {

        var token = jwt.sign({ result }, secretvalue, { expiresIn: '1h' });

        let res = {
            status: true,
            message: 'User Register Successfully !!',
            token : token,
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
            message: 'something went wrong',
            data: errormessage
        }
        response.send(res)
    })
}

exports.login = async (request, response) => {

    const user = await userModal.findOne({ email : request.body.email, type : 'user', deleted_at: null});

    if (!user) {
        const resp = {
            status: false,
            message: "Email id does't exit !!",
            data: []
        }
        response.send(resp)
    } else {

        var password = await bcrypt.compare(request.body.password, user.password);

        if(password){

            if(user.status == true){

                var token = jwt.sign({ user }, secretvalue, { expiresIn: '1h' });

                const resp = {
                    status: true,
                    message: 'Login Succesfully !!',
                    token: token,
                    data: user
                }

                response.send(resp)

            } else {
                const resp = {
                    status: false,
                    message: "Your account is blocked !!",
                    data: []
                }
                response.send(resp)
            }
        } else {
            const resp = {
                status: false,
                message: "Password is incorrect !!",
                data: []
            }
            response.send(resp)
        }
    }
}

exports.viewProfile = async (request, response) => {

    const token = request.headers.authorization.split(' ')[1];
        // console.log(token);
    var decoded = jwt.verify(token, secretvalue);
        console.log(decoded);

    // console.log(request.headers.authorization);
    
    // try {
    //     const token = request.headers.authorization.split(' ')[1];
    //     console.log(token);
    //     var decoded = jwt.verify(token, secretvalue);
    //     console.log(decoded);
    // } catch (error) {
    //     console.log(error);
    // }
    

    await userModal.findOne({ deleted_at: null, status: true })
    .then((result) => {
        if(result) {
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
        let res = {
            status: false,
            message: 'something went wrong',
            data: null
        }
        response.send(res)
    })
}

// exports.update = async (request, response) => {
//     await defaultModal.updateOne({ _id: request.params.id }, {
//         $set: {
//             name: request.body.cate_name,
            
//         }
//     })
//         .then((result) => {
//             let resp = {
//                 status: true,
//                 message: 'record update successfully',
//                 data: result
//             }
//             response.send(resp)
//         })
//         .catch((error) => {
//             var errormessage = []

//             for (var value in error.errors) {
//                 console.log(value);
//                 errormessage.push(error.errors[value].message)
//             }
//             let res = {
//                 status: false,
//                 message: 'something went wrong',
//                 data: errormessage
//             }
//             response.send(res)
//         })
// }

// exports.clear = async (request, response) => {
//     await categoryModal.updateOne({ _id: request.params.id }, {
//         $set: {
//             deleted_at: Date.now()
//         }
//     })
//         .then((result) => {
//             let resp = {
//                 status: true,
//                 message: 'record update successfully',
//                 data: result
//             }
//             response.send(resp)
//         })
//         .catch((error) => {
//             var errormessage = []

//             for (var value in error.errors) {
//                 console.log(value);
//                 errormessage.push(error.errors[value].message)
//             }
//             let res = {
//                 status: false,
//                 message: 'something went wrong',
//                 data: errormessage
//             }
//             response.send(res)
//         })
// }