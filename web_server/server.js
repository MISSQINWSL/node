let http = require('http'),
    fs = require('fs'),
    url = require('url');

// 创建服务器
http.createServer(function(request, response) {
    // 解析url请求，获取pathname
    let pathname = url.parse(request.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(error, data) {
        if(error) {
            console.log(error);
            // 如果出错的话就设置响应头为：
            // HTTP状态码：404（NOT FOUND）
            // Content-type: text/html
            response.writeHead(404, {'Content-type': 'text/html'});
        }else {
            response.writeHead(200, {'Content-type': 'text/html'});
            // 响应文件内容
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');