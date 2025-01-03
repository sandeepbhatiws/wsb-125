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
    
    try {
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secretvalue);
    } catch (error) {
        const data = {
            status: false,
            message: 'Token is invalid',
            tokenStatus : false,
            data: error
        }
        response.send(data)
    }

    await userModal.findOne({ _id: decoded.user._id, deleted_at: null })
    .then((result) => {
        if(result) {
            const resp = {
                status: true,
                message: 'Record  Found Succesfully',
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
        let res = {
            status: false,
            message: 'something went wrong',
            data: null
        }
        response.send(res)
    })
}

exports.updateProfile = async (request, response) => {

    try {
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secretvalue);

        var data = request.body;

        if(request.file){
            data.image = request.file.filename;
        }

        await userModal.updateOne({ _id: decoded.user._id }, {
            $set: data
        })
        .then((result) => {
            let resp = {
                status: true,
                message: 'Profile update successfully',
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
    } catch (error) {
        const data = {
            status: false,
            message: 'Token is invalid',
            tokenStatus : false,
            data: error
        }
        response.send(data)
    }
}

exports.changePassword = async (request, response) => {

    try {
        const token = request.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secretvalue);

        const user = await userModal.findOne({ _id : decoded.user._id });

        var password = await bcrypt.compare(request.body.new_password, user.password);

        if (password) {
            const resp = {
                status: false,
                message: "New password is same as current password !!",
                data: []
            }
            response.send(resp)
        } else {

            const password = bcrypt.hashSync(request.body.new_password, saltRounds);

            await userModal.updateOne({ _id: decoded.user._id }, {
                $set: {
                    password : password
                }
            })
            .then((result) => {
                let resp = {
                    status: true,
                    message: 'Change password successfully',
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
    } catch (error) {
        const data = {
            status: false,
            message: 'Token is invalid',
            tokenStatus : false,
            data: error
        }
        response.send(data)
    }
}

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