// 而路由决定了由谁(指定脚本)去响应客户端请求。
// 在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。
// 接下来扩展 Hello World，添加一些功能来处理更多类型的 HTTP 请求。
let express = require('express'),
    app = express();

    // 主页输出"Hello World"
    app.get('/', function(request, response) {
        console.log("主页GET请求");
        response.send("Hello GET");
    });

    // POST请求
    app.post('/', function(request, response) {
        console.log("主页POST请求");
        response.send("Hello POST");
    });

    // del_user页面响应
    app.get('/del_user', function(request, response) {
        console.log("del_user页面响应DELETE请求");
        response.send("删除页面");
    });

    // list_user页面GET请求
    app.get('/list_user', function(request, response) {
        console.log("list_user页面GET请求");
        response.send("用户列表页面");
    });

    // 对符号ab*cd正则的页面响应GET请求
    app.get('/ab*cd', function(request, response) {
        console.log("ab*cd 页面GET请求");
        response.send("正则匹配页面");
    });

    let server = app.listen(8888, function() {
        let host = server.address().address,
            port = server.address().port;
        console.log("应用实例，访问地址为http://%s:%s", host, port);
    });