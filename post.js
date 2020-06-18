// POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
// 比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。

// 以下为基本语法
// let http = require('http'),
//     queryString = require('querystring'),
//     util = require('util');

// http.createServer(function(request, response) {
//     // 定义了一个post变量，用于暂存请求体的信息
//     let post = '';
//     // 通过request的data时间监听函数，每当接收到请求体的数据，就累加到post变量中
//     request.on('data', function(chunk) {
//         post += chunk;
//     });
//     // 在end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
//     request.on('end', function() {
//         post = queryString.parse(post);
//         response.end(util.inspect(post));
//     });
// }).listen(8888);

// 以下实例表单通过post提交并输出数据
let http = require('http'),
    queryString = require('querystring'),
    util = require('util');

let postHTML = '<html><head><meta charset="utf-8"><title>post实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function(request, response) {
    // 定义了一个post变量，用于暂存请求体的信息
    let post = '';
    // 通过request的data时间监听函数，每当接收到请求体的数据，就累加到post变量中
    request.on('data', function(chunk) {
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
    request.on('end', function() {
        post = queryString.parse(post);
        // response.end(util.inspect(post));
        response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});

        if(post.name && post.url) {
            // 输出提交的数据
            response.write("网站名：" + post.name);
            response.write("<br/>");
            response.write("网站URL：" + post.url);
        }else {
            response.write(postHTML);
        }
        response.end();
    });
}).listen(8888);