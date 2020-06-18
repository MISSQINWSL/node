// 请求require Node.js自带的http模块
let http = require('http');
// 调用http模块提供的函数：createServer，这个函数会返回一个对象，对象有一个叫listen的方法
    http.createServer(function (request, response) {
    // 设置http头部，其中需设置http状态值：200（表明OK）,设置内容类型为text/plain
    response.writeHead(200, {'Content-type': 'text/plain'});
    // 发送响应数据"Hello World"
    response.end("Hello World\n");
}).listen(8888);
// 终端会打印如下信息
console.log('Server running at http://127.0.0.1:8888/')