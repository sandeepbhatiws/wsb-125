const http = require('http');
const url = require('url');
const apiData = require('./apiData/apiData.js');

http.createServer((request, response) => {

    const parseUrl = url.parse(request.url,true);

    console.log(parseUrl);
    if(request.url == '/'){
        response.end('Server Started !!');
    } else if(parseUrl.pathname == '/categories' && request.method == 'POST'){
        
        if(apiData.categories.length > 0){
            var data = {
                status : true,
                message : 'Record fetch suuccessfully !!',
                data : apiData.categories
            }
        } else {
            var data = {
                status : false,
                message : 'No Record Found !!',
                data : []
            }
        }
        
        response.end(JSON.stringify(data));
    } else {
        response.end('404 page not found !!');
    }

    // var data = {
    //     status : true,
    //     message : 'Record fetch suuccessfully !!',
    //     data : []
    // }

    // response.end(JSON.stringify(data));
    // response.end('<h1>Welcome to WsCubeTech</h1>');

}).listen('8080',() => {
    console.log('Server is working fine.');
});